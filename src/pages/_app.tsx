import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import type { AppProps } from "next/app";
import { useMemo, useState } from "react";
import React from "react";
import "../styles/globals.css";

export const ColorModeContext = React.createContext({
  toggleColorMode: (mode: "light" | "dark") => {},
});

export default function App({ Component, pageProps }: AppProps) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [manualDarkMode, setManualDarkMode] = useState<"light" | "dark" | null>(
    null
  );
  const onModeChange = React.useMemo(
    () => ({
      toggleColorMode: (mode: "light" | "dark") => {
        setManualDarkMode(mode);
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode:
            (manualDarkMode == "dark" || prefersDarkMode) &&
            manualDarkMode != "light"
              ? "dark"
              : "light",
        },
      }),
    [prefersDarkMode, manualDarkMode]
  );
  return (
    <ColorModeContext.Provider value={onModeChange}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
