import React, { useContext } from "react";

import { Style, StyleContext } from "../pages/_app";

export const Navbar = () => {
  const { style, setStyle } = useContext(StyleContext);
  return (
    <>
      <div className={style.darkmode ? "navbar-dark" : "navbar-light"} style={{ position: "fixed", minWidth: "100%", minHeight: "50px" }}>
        <button onClick={() => setStyle({ ...style, style: Style.LaTeX })}>LaTeX</button>
        <button onClick={() => setStyle({ ...style, style: Style.GitHub })}>GitHub</button>
        <button onClick={() => setStyle({ ...style, darkmode: !style.darkmode })}>Darkmode</button>
      </div>
      <div style={{ minHeight: "50px" }} />
    </>
  );
};