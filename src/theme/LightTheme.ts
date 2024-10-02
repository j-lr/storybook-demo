import { createTheme } from "@mui/material";

 const lightTheme = createTheme({
        palette: {
            mode: "light",
            background: {
                paper: "#fff",
            },
            primary: {
                main: "#b74e11",
            },
            secondary: {
                main: "#dc004e",
            },
            text: {
                primary: "#173A5E",
                secondary: "#46505A",
            },
            action: {
                active: "#001E3C",
            },
            success: {
                main: "#4caf50",
                dark: "#009688",
            },
        },
    });

    export default lightTheme;