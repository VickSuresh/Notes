import { Box, Toolbar, AppBar, Container, Typography, IconButton } from "@mui/material";
import { GitHub } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";

interface IProps {
   color?: string
}

export default function MyAppBar({ color = "#5D20D3" }: IProps) {

   const theme = useTheme();

   return (
      <AppBar sx={{ backgroundColor: color }} position="static">
         <Container maxWidth="xl" >
            <Toolbar sx={{ justifyContent: "space-between" }}>
               <Link href="/" style={{ textDecoration: "none" }}>
                  <Typography variant="h2" >
                     Notes
                  </Typography>
               </Link>
               <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Link href="https://www.github.com/VickSuresh" passHref={true} rel="noopener noreferrer" target="_blank">
                     <IconButton>
                        <GitHub sx={{ color: theme.palette.secondary.main }} fontSize="large" />
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