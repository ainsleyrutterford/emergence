import React, { createContext, useState } from "react";

import "../styles/global.css";
import type { AppProps } from "next/app";

export enum Style {
  LaTeX,
  GitHub,
}

export const StyleContext = createContext({
  style: {
    darkmode: false, style: Style.LaTeX, 
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setStyle: (style: { darkmode: boolean, style: Style }) => {},
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [style, setStyle] = useState({ darkmode: false, style: Style.LaTeX });

  return (
    <StyleContext.Provider value={{ style, setStyle }}>
      <Component {...pageProps} />
      {/* This allows us to change the background programmatically */}
      <style jsx global>
        {`
          body {
            background: ${style.darkmode ? "#0d1117" : "white"};
          }
        `}
      </style>
    </StyleContext.Provider>
  );
};

export default MyApp;
