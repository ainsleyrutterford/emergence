import React, { useContext } from "react";

import type { NextPage } from "next";
import Head from "next/head";
import TestHTML from "../components/test-html";

import { StyleContext, Style } from "./_app";

const Home: NextPage = () => {
  const [style, setStyle] = useContext(StyleContext);

  return (
  <div {...(style.darkmode ? { "data-color-mode": "dark", "data-dark-theme": "dark" } : {})}>
    <Head>
      <title>Emergence</title>
      <link rel="icon" href={`/${process.env.NEXT_PUBLIC_REPO_NAME}/favicon.ico`} />
      {style.style === Style.LaTeX ? <link rel="stylesheet" href="styles/latex.css" /> :
      <link rel="stylesheet" href="styles/github.css" />}
    </Head>

    <button onClick={() => setStyle({ ...style, style: Style.LaTeX })}>LaTeX style</button>
    <button onClick={() => setStyle({ ...style, style: Style.GitHub })}>GitHub style</button>
    <button onClick={() => setStyle({ ...style, darkmode: !style.darkmode })}>Toggle darkmode</button>
    <div className="markdown-body" style={{ maxWidth: "1000px", marginLeft: "auto", marginRight: "auto" }}>
      {`Hello: ${style.darkmode} ...`}
      <TestHTML />
    </div>
  </div>
  );
};

export default Home;
