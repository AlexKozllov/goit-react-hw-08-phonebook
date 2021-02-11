import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { mainRoutes } from "../../routers/mainRouts";

const NavigationsLinks = () => {
  const isAuthenticated = useSelector((state) => !!state.auth.token);

  return (
    <ul>
      {isAuthenticated
        ? mainRoutes.map((route) => {
            if (route.private & route.restricted) {
              return (
                <li key={route.path}>
                  <NavLink
                    to={route.path}
                    exact={route.exect}
                    className=""
                    activeClassName=""
                  >
                    {route.name}
                  </NavLink>
                </li>
              );
            }
            if (!route.private & !route.restricted) {
              return (
                <li key={route.path}>
                  <NavLink
                    to={route.path}
                    exact={route.exect}
                    className=""
                    activeClassName=""
                  >
                    {route.name}
                  </NavLink>
                </li>
              );
            }
          })
        : mainRoutes.map((route) => {
            if (!route.private) {
              return (
                <li key={route.path}>
                  <NavLink
                    to={route.path}
                    exact={route.exect}
                    className=""
                    activeClassName=""
                  >
                    {route.name}
                  </NavLink>
                </li>
              );
            }
          })}
    </ul>
  );
};

export default NavigationsLinks;
