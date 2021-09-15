import React from "react";

import "../styles/globals.css";
import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
      {/* This will allow us to change the background programmatically */}
      <style jsx global>
        {`
          body {
            background: white;
          }
        `}
      </style>
    </>
  );
};

export default MyApp;
