import { Card, CardContent, TextField, Collapse, CardActions, IconButton } from "@mui/material";
import { Save } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { UseQueryResult } from "react-query";
import { useState, useEffect } from "react";
import { createNote } from "../../api/note";
import { AxiosError } from "axios";

interface IProps {
  refetch: () => Promise<UseQueryResult>
}

export default function CreateNote(props: IProps) {

  const theme = useTheme();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);
  const [contentFocus, setContentFocus] = useState<boolean>(false);
  const [saveable, setSaveable] = useState<boolean>(false);
  const [saveError, setSaveError] = useState<string>("");

  //checks if content is past limit. 
  const isError = (): boolean => {
    return content.length >= 140;
  }

  //opens content box only when there is text in title, and removes error text
  useEffect(() => {
    if (title) setShow(true);
    else setShow(false);
  }, [title])

  //enables save only if there is content
  useEffect(() => {
    if (content) setSaveable(true);
    else setSaveable(false);
  }, [content])

  //gets rid of error text after typing
  useEffect(() => {
    if (title) setSaveError("");
  }, [title])

  const handleCreate = async (): Promise<void> => {
    try {
      await createNote({
        title: title,
        content: content
      });
      props.refetch();
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err.response?.status === 409) setSaveError("Note title already exists");
      }
      else console.log(err);
    } finally {
      setTitle("");
      setContent("");
    }
  }

  return (
    <Card sx={{ maxWidth: 345, borderColor: theme.palette.secondary.main, backgroundColor: theme.palette.primary.dark, borderRadius: 6, boxShadow: 5 }} variant="outlined">
      <CardContent>
        <TextField
          error={saveError ? true : false}
          sx={{ input: { color: theme.palette.primary.light }, paddingBottom: "1rem" }}
          variant="standard"
          color="secondary"
          fullWidth
          value={title}
          label="Create"
          placeholder="Title"
          name="title"
          inputProps={{ maxLength: 140 }}
          onChange={(e) => setTitle(e?.target?.value || "")}
          helperText={saveError || null}
        />
        <Collapse in={show}>
          <TextField
            error={isError()}
            variant="standard"
            color="secondary"
            fullWidth
            value={content}
            name="content"
            label="Content"
            inputProps={{ maxLength: 140, style: { color: theme.palette.primary.light } }}
            onChange={(e) => setContent(e.target.value)}
            onFocus={() => setContentFocus(true)}
            onBlur={() => setContentFocus(false)}
            multiline
            helperText={contentFocus && `Characters remaining: ${140 - content.length}`}
          />
          <CardActions sx={{ paddingBottom: 0, display: "flex", justifyContent: "flex-end" }}>
            <IconButton color="secondary" disabled={!saveable} onClick={() => handleCreate()}>
              <Save />
            </IconButton>
          </CardActions>
        </Collapse>
      </CardContent>
    </Card>
  )
}