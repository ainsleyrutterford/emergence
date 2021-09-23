import Head from "next/head";
import React, { useContext } from "react";

import { Style, ThemeContext } from "../pages/_app";
import githubStyles from "../styles/github.module.css";
import latexStyles from "../styles/latex.module.css";

interface Props {
  title: string;
  children?: React.ReactNode;
}

export const Article = ({ title, children }: Props) => {
  const { articleStyle } = useContext(ThemeContext);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div
        // Set article style
        className={
          articleStyle === Style.LaTeX
            ? latexStyles["markdown-body"]
            : githubStyles["markdown-body"]
        }
      >
        {children}
      </div>
    </>
  );
};
