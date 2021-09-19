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
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Head>
        <title>{title}</title>
        <link
          rel="icon"
          href={`/${process.env.NEXT_PUBLIC_REPO_NAME}/favicon.ico`}
        />
      </Head>
      <div
        // Set article dark mode
        {...{ "color-mode": theme.darkmode ? "dark" : "light" }}
        // Set article style
        className={
          theme.style === Style.LaTeX
            ? latexStyles["markdown-body"]
            : githubStyles["markdown-body"]
        }
      >
        {children}
      </div>
    </>
  );
};
