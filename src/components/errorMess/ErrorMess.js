import React from "react";

import s from "./errorMess.module.css";

const ErrorMess = () => {
  return (
    <div className={s.wornings}>
      <p>Wrong login or password! </p>
      <p>Try again.</p>
    </div>
  );
};

export default ErrorMess;
