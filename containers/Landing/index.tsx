import { Box, Button, Theme, Typography, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MyAppBar from "../../components/MyAppBar";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import landingImage from "../../public/landing/landingImage.png";
import Link from "next/link";

export default function Landing() {

  const theme: Theme = useTheme();

  const StyledButton = styled(Button)({
    margin: "16px",
    fontWeight: "bold",
  }) as typeof Button;

  return (
    <Box
      sx={{
        background: `linear-gradient(to left bottom, ${theme.palette.primary.main}, 80%, ${theme.palette.secondary.main})`,
        height: "100%",
        position: "relative"
      }}
    >
      <MyAppBar />
      <Container maxWidth="md">
        <Box sx={{
          position: "relative",
          top: theme.spacing(10),
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center"
        }}>
          <Typography variant="h2" padding={theme.spacing(2)}>
            A better solution for your note taking needs.
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
            <StyledButton variant="contained" color="secondary">
              <Link
                href="/notes"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Get started
              </Link>
            </StyledButton>
            <StyledButton variant="outlined" color="secondary">
              <Link
                href="https://www.github.com/VickSuresh/notes"
                passHref={true}
                rel="noopener noreferrer"
                target="_blank"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                View source
              </Link>
            </StyledButton>
          </Box>
          <Box sx={{
            position: "relative",
            width: "600px",
            height: "400px",
            top: theme.spacing(6),
            [theme.breakpoints.down("sm")]: {
              width: "325px",
              height: "220px"
            }
          }}>
            <Image
              alt="app preview"
              src={landingImage}
              fill
              style={{ objectFit: "contain" }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}