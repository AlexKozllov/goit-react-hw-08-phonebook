import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const PublicRoute = ({ component: Component, ...routeProps }) => {
  const isAuthenticated = useSelector((state) => !!state.auth.token);
  return (
    <Route
      {...routeProps}
      render={(props) =>
        isAuthenticated && routeProps.restricted ? (
          <Redirect to="/contacts" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
