import React, { useEffect, useState } from "react";
import { FcCheckmark } from "react-icons/fc";
import { FiClipboard } from "react-icons/fi";

import styles from "./code-block.module.css";

interface Props {
  code: string;
  html: string;
}

export const CodeBlock = ({ code, html }: Props) => {
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const [icon, setIcon] = useState(<FiClipboard />);

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
      className={styles["code-block-container"]}
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
