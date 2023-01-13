import { Box, Grid, Theme, Typography, Container, CircularProgress } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNotes } from "../../hooks/useNotes";
import NoteCard from "../../components/NoteCard";
import MyAppBar from "../../components/MyAppBar";
import CreateNote from "../../components/CreateNote";

export default function NoteContainer() {

  //const { isLoading, isError, data, refetch } = useNotes();
  const theme: Theme = useTheme();
  const { isLoading, isRefetching, isError, data, refetch } = useNotes();

  return (
    <Box sx={{ backgroundColor: theme.palette.primary.dark }}>
      <MyAppBar color={theme.palette.primary.dark} />
      <Box margin={theme.spacing(8)}>
        <CreateNote refetch={refetch} />
        {isLoading || isRefetching ? (
          <Box padding={2} textAlign="center" color="secondary">
            <CircularProgress />
          </Box>
        ) : (
          <Grid container spacing={4} paddingTop={theme.spacing(8)}>
            {
              data?.map((group) => {
                return (
                  <Grid item xs={12} sm={6} md={4}>
                    <NoteCard data={group} refetch={refetch} />
                  </Grid>
                )
              })}
          </Grid>
        )}
      </Box>
    </Box>
  )
}