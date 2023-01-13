import { Box, Grid, Theme, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNotes } from "../../hooks/useNotes";
import NoteCard from "../../components/NoteCard";

export default function NoteContainer() {

  //const { isLoading, isError, data, refetch } = useNotes();
  const theme: Theme = useTheme();
  const { isLoading, isError, data, refetch } = useNotes();

  if (isLoading) return <></>
  return (
    <Box sx={{ backgroundColor: theme.palette.primary.dark }}>
      <NoteCard data={data?.[0]} refetch={refetch} />
    </Box>
  )
}