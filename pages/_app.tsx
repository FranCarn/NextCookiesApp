import { ThemeProvider } from "@emotion/react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { darkTheme, customTheme, lightTheme } from "../themes";
import { CssBaseline, Theme } from "@mui/material";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [currentTheme, setCurrentTheme] = useState(darkTheme);

  useEffect(() => {
    const cookieTheme = Cookies.get("theme") || "dark";
    const themeMap: { [key: string]: Theme } = {
      light: lightTheme,
      dark: darkTheme,
      custom: customTheme,
    };
    setCurrentTheme(themeMap[cookieTheme] || darkTheme);
  }, []);

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
