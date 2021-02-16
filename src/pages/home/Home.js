import React from "react";
import { useSelector } from "react-redux";
import { getIsAuthenticated } from "../../redux/selectors/authSelectors";

import s from "./home.module.css";

const Home = () => {
  const isAuthenticated = useSelector((state) => getIsAuthenticated(state));

  return (
    <>
      {isAuthenticated ? (
        <h2 className={s.message}>Your phone book on the contacts tab :))</h2>
      ) : (
        <>
          <h1 className={s.welcome}>Welcome!!!</h1>
          <h2 className={s.message}>
            To use the phone book, register or login
          </h2>
        </>
      )}
    </>
  );
};

export default Home;
