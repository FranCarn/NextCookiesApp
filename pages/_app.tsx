import { ThemeProvider } from "@emotion/react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { darkTheme } from "../themes";
import { CssBaseline } from "@mui/material";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
