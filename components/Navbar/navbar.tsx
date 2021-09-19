import React, { useContext } from "react";

import { Style, ThemeContext } from "../../pages/_app";
import styles from "./navbar.module.css";

export const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      <div
        {...{ "color-mode": theme.darkmode ? "dark" : "light" }}
        className={styles.navbar}
      >
        <button onClick={() => setTheme({ ...theme, style: Style.LaTeX })}>
          LaTeX
        </button>
        <button onClick={() => setTheme({ ...theme, style: Style.GitHub })}>
          GitHub
        </button>
        <input
          type="checkbox"
          checked={theme.darkmode}
          onChange={() => setTheme({ ...theme, darkmode: !theme.darkmode })}
        ></input>
      </div>
      <div style={{ minHeight: "50px" }} />
    </>
  );
};
