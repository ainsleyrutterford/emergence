import { Octokit } from "@octokit/core";
import React, { useEffect, useState } from "react";
import { FcCheckmark } from "react-icons/fc";
import { FiClipboard } from "react-icons/fi";

import styles from "./code-block.module.css";

interface Props {
  code: string;
  language: string;
}

const octokit = new Octokit();

export const CodeBlock = ({ code, language }: Props) => {
  const [html, setHtml] = useState("");
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const [icon, setIcon] = useState(<FiClipboard />);

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
      setIcon(<FcCheckmark />);
      setTimeout(() => {
        setIcon(<FiClipboard />);
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
        title="Copy to clipboard"
        className={visible ? styles["button-visible"] : styles["button-hidden"]}
        onClick={() => {
          navigator.clipboard.writeText(code);
          setCopied(true);
        }}
      >
        {icon}
      </button>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </div>
  );
};
