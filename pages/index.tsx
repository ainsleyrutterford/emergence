import type { NextPage } from "next";
import React from "react";

import { Article } from "../components/article";
import { Navbar } from "../components/Navbar/navbar";
import TestHTML from "../components/test-html";

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
