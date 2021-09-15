import React, { useState } from "react";

import type { NextPage } from "next";
import Head from "next/head";
import TestHTML from "../components/test-html";

const Home: NextPage = () => {
  // TODO: move these to _app.tsx
  const [latex, setLatex] = useState(true);
  const [darkmode, setDarkmode] = useState(false);

  return (
  <div {...(darkmode ? { "data-color-mode": "dark", "data-dark-theme": "dark" } : {})}>
    <Head>
      <title>Emergence</title>
      <link rel="icon" href={`/${process.env.NEXT_PUBLIC_REPO_NAME}/favicon.ico`} />
      {latex ? <link rel="stylesheet" href="styles/latex.css" /> :
      <link rel="stylesheet" href="styles/github.css" />}
    </Head>

    <button onClick={() => setLatex(!latex)}>Toggle Style</button>
    <button onClick={() => setDarkmode(!darkmode)}>Toggle darkmode</button>
    <div className="markdown-body" style={{ maxWidth: "1000px", marginLeft: "auto", marginRight: "auto" }}>
      <TestHTML />
    </div>
  </div>
  );
};

export default Home;
