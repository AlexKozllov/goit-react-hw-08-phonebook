import React from "react";
import { useSelector } from "react-redux";
import { getIsAuthenticated } from "../../redux/selectors/authSelectors";

const Home = () => {
  const isAuthenticated = useSelector((state) => getIsAuthenticated(state));

  return (
    <>
      {isAuthenticated ? (
        <h2>Your phone book on the contacts tab :))</h2>
      ) : (
        <>
          <h1>Welcome!!!</h1>
          <h2>To use the phone book, register or login</h2>
        </>
      )}
    </>
  );
};

export default Home;
