import { createTheme, Theme } from "@mui/material/styles";

const theme: Theme = createTheme({
    palette: {
        primary: {
            main: "#5D20D3",
            light: "#FEFCFF",
            dark: "#321B6C"
        },
        secondary: {
            main: "#71E1E1",
            contrastText: "#321B6C"
        }
    },
    typography: {
        allVariants: {
            fontFamily: "Poppins",
            color: "#FEFCFF",
        },
        h1: {
            fontSize: 40,
            fontWeight: 700
        },
        h2: {
            fontSize: 32,
            fontWeight: 700,
        },
        h3: {
            fontSize: 20,
            fontWeight: 700,
        },
        body1: {
            fontWeight: 400,
            fontSize: 16,
        },
        subtitle1: {
            fontWeight: 700,
            fontSize: 16,
        }
    }

});

export default theme;