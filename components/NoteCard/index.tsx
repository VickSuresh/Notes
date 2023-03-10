import { Card, CardContent, CardActions, TextField, IconButton } from "@mui/material";
import { Delete, Save } from "@mui/icons-material";
import { useTheme, styled } from "@mui/material/styles";
import { ChangeEvent, useState, useEffect } from "react";
import { INote } from "../../hooks/useNotes";
import { updateNote, deleteNote } from "../../api/note";
import { UseQueryResult } from "react-query";
import ConfirmDialog from "../ConfirmDialog";
import { AxiosError } from "axios";

interface IProps {
  data?: INote,
  refetch: () => Promise<UseQueryResult>
}


export default function NoteCard(props: IProps) {

  const theme = useTheme();
  const [title, setTitle] = useState<string>(props.data?.title || "");
  const [content, setContent] = useState<string>(props.data?.content || "");
  const [contentFocus, setContentFocus] = useState<boolean>(false);
  const [edited, setEdited] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [saveError, setSaveError] = useState<string>("");

  //checks if content is past limit. 
  const isError = (): boolean => {
    return content.length >= 140;
  }

  //calls api. If an error is returned, it sets error text
  const handleEdit = async (): Promise<void> => {
    try {
      await updateNote({
        title: props.data?.title,
        newTitle: title == props.data?.title ? null : title,
        newContent: content
      });
      props.refetch();
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err.response?.status === 409) setSaveError("Note title already exists");
      }
      else console.log(err);
    } finally {
      setEdited(false);
    }
  }

  const handleDelete = async (): Promise<void> => {
    try {
      await deleteNote(props.data?.title);
      props.refetch();
    } catch (err) {
      console.log(err);
    } finally {
      setOpen(false);
    }
  }

  //opens the save button if data has been edited
  useEffect(() => {
    if (content == props.data?.content && title == props.data?.title) setEdited(false);
    else setEdited(true);
  }, [title, content])

  //gets rid of error text after typing
  useEffect(() => {
    if (title) setSaveError("");
  }, [title])

  return (
    <Card sx={{ maxWidth: 345, borderColor: theme.palette.secondary.main, backgroundColor: theme.palette.primary.dark, borderRadius: 6, boxShadow: 5 }} variant="outlined">
      <CardContent>
        <TextField
          error={saveError ? true : false}
          sx={{ input: { color: theme.palette.primary.light, fontWeight: "bold" }, paddingBottom: "1rem" }}
          variant="standard"
          color="secondary"
          fullWidth
          name="title"
          value={title}
          inputProps={{ maxLength: 140 }}
          onChange={(e) => setTitle(e?.target?.value || "")}
          helperText={saveError || null}
        />
        <TextField
          error={isError()}
          variant="standard"
          color="secondary"
          fullWidth
          name="content"
          value={content}
          inputProps={{ maxLength: 140, style: { color: theme.palette.primary.light } }}
          onChange={(e) => setContent(e.target.value)}
          onFocus={() => setContentFocus(true)}
          onBlur={() => setContentFocus(false)}
          multiline
          helperText={contentFocus && `Characters remaining: ${140 - content.length}`}
        />
      </CardContent>
      <CardActions sx={{ paddingTop: 0, display: "flex", justifyContent: "flex-end" }}>
        <IconButton color="secondary" onClick={() => setOpen(true)}>
          <Delete />
        </IconButton>
        <IconButton color="secondary" disabled={!edited} onClick={() => handleEdit()}>
          <Save />
        </IconButton>
      </CardActions>
      <ConfirmDialog open={open} handleClose={() => setOpen(false)} handleConfirm={() => handleDelete()} />
    </Card >
  )
}