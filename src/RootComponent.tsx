import { useEffect, useState } from "react";

import App from "./App.tsx";
import "./index.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import darkTheme from "./theme/DarkTheme.ts";
import lightTheme from "./theme/LightTheme.ts";
import { BrowserRouter } from "react-router-dom";

const RootComponent = () => {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  const [isDarkMode, setIsDarkMode] = useState(prefersDarkMode);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (event: MediaQueryListEvent) => {
      setIsDarkMode(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const theme = {
    ...(isDarkMode ? darkTheme : lightTheme),
    shape: {
      borderRadius: 2,
    },
    components: {
      MuiButton: {
        defaultProps: {
          disableRipple: true,
          disableFocusRipple: true,
        },
      },
    },
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  );
};
export default RootComponent;
