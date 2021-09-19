import "../styles/global.css";

import type { AppProps } from "next/app";
import React, { createContext, useEffect, useState } from "react";

export enum Style {
  LaTeX,
  GitHub,
}

export const ThemeContext = createContext({
  theme: {
    darkmode: false,
    style: Style.LaTeX,
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setTheme: (style: { darkmode: boolean; style: Style }) => {},
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [theme, setTheme] = useState({ darkmode: false, style: Style.LaTeX });

  useEffect(() => {
    // Set the theme to be the same as the system theme initially
    setTheme({
      ...theme,
      darkmode:
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches,
    });

    // Create an event listener for when the system theme changes
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        setTheme({ ...theme, darkmode: event.matches });
      });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Component {...pageProps} />
      {/* This allows us to change the background programmatically */}
      <style jsx global>
        {`
          body {
            background: ${theme.darkmode ? "#0d1117" : "white"};
          }
        `}
      </style>
    </ThemeContext.Provider>
  );
};

export default MyApp;
