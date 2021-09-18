import React, { useContext } from "react";
import { Style, StyleContext } from "../pages/_app";
import Head from "next/head";

import latexStyles from "../styles/latex.module.css";
import githubStyles from "../styles/github.module.css";

interface Props {
  title: string;
  children?: React.ReactNode;
}

export const Article = ({ title, children }: Props) => {
  const { style } = useContext(StyleContext);

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href={`/${process.env.NEXT_PUBLIC_REPO_NAME}/favicon.ico`} />
      </Head>
      <div
        // Set article style
        className={style.style === Style.LaTeX ? latexStyles["markdown-body"] : githubStyles["markdown-body"]}
        // Set article dark mode
        {...({ "color-mode": style.darkmode ? "dark" : "light" })}>
        {children}
      </div>
    </>
  );
};