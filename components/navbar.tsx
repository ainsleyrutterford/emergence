import React, { useContext } from "react";

import { Style, StyleContext } from "../pages/_app";

export const Navbar = () => {
  const { style, setStyle } = useContext(StyleContext);
  return (
    <>
      <div style={{ backgroundColor: "white", position: "fixed", minWidth: "100%", minHeight: "50px" }}>
        <button onClick={() => setStyle({ ...style, style: Style.LaTeX })}>LaTeX style</button>
        <button onClick={() => setStyle({ ...style, style: Style.GitHub })}>GitHub style</button>
        <button onClick={() => setStyle({ ...style, darkmode: !style.darkmode })}>Toggle darkmode</button>
      </div>
      <div style={{ minHeight: "50px" }} />
    </>
  );
};