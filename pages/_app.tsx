import React, { createContext, useState } from "react";

import "../styles/globals.css";
import type { AppProps } from "next/app";

export enum Style {
  LaTeX,
  GitHub,
}

export const StyleContext = createContext([] as any[]);

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [style, setStyle] = useState({ darkmode: false, style: Style.LaTeX });

  return (
    <StyleContext.Provider value={[style, setStyle]}>
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
