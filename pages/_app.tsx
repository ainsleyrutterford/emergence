/* eslint-disable @typescript-eslint/no-unused-vars */
import "../styles/global.css";

import type { AppProps } from "next/app";
import React, { createContext, useEffect, useState } from "react";

const defaultContext = {
  colorMode: "",
  setColorMode: (mode: string) => {},
  articleStyle: "",
  setArticleStyle: (style: string) => {},
};

export const ThemeContext = createContext(defaultContext);

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [colorMode, setColorMode] = useState("");
  const [articleStyle, setArticleStyle] = useState("");

  // Runs once on initial render. Gets the color mode from the HTML element.
  useEffect(() => {
    const initialColorMode =
      document.documentElement.getAttribute("color-mode");
    const initialArticleStyle =
      document.documentElement.getAttribute("article-style");

    setColorMode(initialColorMode === "dark" ? "dark" : "light");
    setArticleStyle(initialArticleStyle === "github" ? "github" : "latex");
  }, []);

  // Runs each time colorMode is updated. Update the HTML element and store
  // the new value in local storage
  useEffect(() => {
    if (colorMode !== "") {
      document.documentElement.setAttribute("color-mode", colorMode);
      window.localStorage.setItem("color-mode", colorMode);
    }
  }, [colorMode]);

  // Runs each time articleStyle is updated. Store the new value in local storage
  useEffect(() => {
    if (articleStyle !== "") {
      window.localStorage.setItem("article-style", articleStyle);
    }
  }, [articleStyle]);

  return (
    <ThemeContext.Provider
      value={{ colorMode, setColorMode, articleStyle, setArticleStyle }}
    >
      <Component {...pageProps} />
    </ThemeContext.Provider>
  );
};

export default MyApp;
