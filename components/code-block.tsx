import { Octokit } from "@octokit/core";
import React, { useEffect, useState } from "react";

interface Props {
  code: string;
  language: string;
}

const octokit = new Octokit();

export const CodeBlock = ({ code, language }: Props) => {
  const [html, setHtml] = useState("");
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const [text, setText] = useState("Copy to clipboard");

  // Use the GitHub Markdown API to generate the HTML with syntax highlighting
  useEffect(() => {
    (async () => {
      const codeHtml = await octokit.request("POST /markdown", {
        text: "```" + language + "\n" + code,
      });

      setHtml(codeHtml.data);
    })();
  }, []);

  // Change the button to let the user know the text has been copied to the clipboard
  useEffect(() => {
    if (copied) {
      setText("Copied");
      setTimeout(() => {
        setText("Copy to clipboard");
        setCopied(false);
      }, 2000);
    }
  }, [copied]);

  return (
    <div
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      <button
        style={{ position: "absolute", display: visible ? "inherit" : "none" }}
        onClick={() => {
          navigator.clipboard.writeText(code);
          setCopied(true);
        }}
      >
        {text}
      </button>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </div>
  );
};
