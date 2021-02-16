import React from "react";
import AppBar from "./appBar/AppBar";
import s from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={s.wrapper}>
      <AppBar />
      <hr />
      <main> {children}</main>
    </div>
  );
};

export default Layout;
