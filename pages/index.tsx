import React, { useState } from "react";

import type { NextPage } from "next";
import Head from "next/head";
import TestHTML from "../components/test-html";

const Home: NextPage = () => {
  const [latex, setLatex] = useState(true);

  return (
  <div>
    <Head>
      <title>Emergence</title>
      <link rel="icon" href={`/${process.env.NEXT_PUBLIC_REPO_NAME}/favicon.ico`} />
      {latex ? <link rel="stylesheet" href="https://unpkg.com/latex.css/style.min.css" /> :
      <link rel="stylesheet" type="text/css" href="https://unpkg.com/github-markdown-css/github-markdown.css" />}
    </Head>

    <button onClick={() => setLatex(!latex)}>Toggle Style</button>
    <div className="markdown-body">
      <TestHTML />
    </div>
  </div>
  );
};

export default Home;
