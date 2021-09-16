import React from "react";

import type { NextPage } from "next";
import TestHTML from "../components/test-html";

import { Article } from "../components/article";
import { Navbar } from "../components/navbar";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Article title="Emergence">
        <TestHTML />
      </Article>
    </>
  );
};

export default Home;
