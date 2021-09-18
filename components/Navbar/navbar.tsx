import React, { useContext } from "react";

import { Style, StyleContext } from "../../pages/_app";

import styles from "./navbar.module.css";

export const Navbar = () => {
  const { style, setStyle } = useContext(StyleContext);
  const [checked, setChecked] = React.useState(false);
 
  const handleChange = () => {
    setChecked(!checked);
    setStyle({ ...style, darkmode: !style.darkmode });
  };
  
  return (
    <>
      <div className={style.darkmode ? styles["navbar-dark"] : styles["navbar-light"]}>
        <button onClick={() => setStyle({ ...style, style: Style.LaTeX })}>LaTeX</button>
        <button onClick={() => setStyle({ ...style, style: Style.GitHub })}>GitHub</button>
        <input type="checkbox" checked={checked} onChange={handleChange}></input>
      </div>
      <div style={{ minHeight: "50px" }} />
    </>
  );
};