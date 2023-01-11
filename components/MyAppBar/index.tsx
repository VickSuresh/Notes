import { Box, Toolbar, AppBar, Container, Typography, IconButton } from "@mui/material";
import { GitHub } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";

export default function MyAppBar() {

   const theme = useTheme();

   return (
      <AppBar position="static">
         <Container maxWidth="xl" >
            <Toolbar sx={{ justifyContent: "space-between" }}>
               <Typography variant="h2" >
                  Notes
               </Typography>
               <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Link href="https://www.github.com/VickSuresh" passHref={true} rel="noopener noreferrer" target="_blank">
                     <IconButton>
                        <GitHub sx={{ color: theme.palette.primary.dark }} fontSize="large" />
                     </IconButton>
                  </Link>
                  <Typography variant="h3" paddingLeft={theme.spacing(1)}>
                     by VickSuresh
                  </Typography>
               </Box>
            </Toolbar>
         </Container>
      </AppBar>
   )
}