import React, { useContext } from "react";
import { Style, StyleContext } from "../pages/_app";
import Head from "next/head";

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
        {style.style === Style.LaTeX ? 
          <link rel="stylesheet" href="styles/latex.css" /> :
          <link rel="stylesheet" href="styles/github.css" />}
      </Head>
      <div {...(style.darkmode ? { "data-color-mode": "dark", "data-dark-theme": "dark" } : {})}>
        <div className="markdown-body" style={{ maxWidth: "1000px", marginLeft: "auto", marginRight: "auto" }}>
          {children}
        </div>
      </div>
    </>
  );
};