import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { getIsAuthenticated } from "../../../redux/selectors/authSelectors";

const PublicRoute = ({ component: Component, ...routeProps }) => {
  const isAuthenticated = useSelector((state) => getIsAuthenticated(state));
  console.log("routeProps", routeProps);
  return (
    <Route
      {...routeProps}
      render={(props) => {
        console.log("isAuthenticated", isAuthenticated);
        return isAuthenticated && routeProps.restricted ? (
          <Redirect to="/contacts" />
        ) : (
          <Component {...props} />
        );
      }}
    />
  );
};

export default PublicRoute;
