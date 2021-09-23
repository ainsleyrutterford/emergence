/* eslint-disable @typescript-eslint/no-unused-vars */
import "../styles/global.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import React, { createContext, useEffect, useState } from "react";

export enum Style {
  LaTeX,
  GitHub,
}

export const ThemeContext = createContext<{
  colorMode: string;
  setColorMode: (mode: string) => void;
  articleStyle: Style;
  setArticleStyle: (style: Style) => void;
}>({} as any);

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [colorMode, setColorMode] = useState("");
  const [articleStyle, setArticleStyle] = useState(Style.LaTeX);

  // Runs once on initial render. Gets the color mode from the HTML element.
  useEffect(() => {
    const initialColorMode =
      document.documentElement.getAttribute("color-mode");
    setColorMode(initialColorMode === "dark" ? "dark" : "light");
  }, []);

  // Runs each time colorMode is updated. Update the HTML element and store
  // the new value in local storage
  useEffect(() => {
    if (colorMode !== "") {
      document.documentElement.setAttribute("color-mode", colorMode);
      window.localStorage.setItem("color-mode", colorMode);
    }
  }, [colorMode]);

  return (
    <>
      <Head>
        <script id="theme" src="theme.js" />
        <link
          rel="icon"
          href={`/${process.env.NEXT_PUBLIC_REPO_NAME}/favicon.ico`}
        />
      </Head>
      <ThemeContext.Provider
        value={{ colorMode, setColorMode, articleStyle, setArticleStyle }}
      >
        <Component {...pageProps} />
      </ThemeContext.Provider>
    </>
  );
};

export default MyApp;
