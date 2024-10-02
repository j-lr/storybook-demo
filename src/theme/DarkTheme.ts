import { createTheme } from "@mui/material";
import { deepOrange, yellow } from "@mui/material/colors";

 const darkTheme = createTheme({
        palette: {
            mode: "dark",
            background: {
                default: "#121212",
                paper: "#242424",
            },
            primary:{
                main:deepOrange[800],
            },
            secondary: {
                main: yellow[500],
            },
            text: {
                primary: "#fff",
                secondary: "#ccc",
            },
            action: {
                active: "#fff",
            },
            success: {
                main: "#4caf50",
                dark: "#009688",
            },
        },
    });

    export default darkTheme;