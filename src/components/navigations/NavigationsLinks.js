import React from "react";
import { NavLink } from "react-router-dom";
import { mainRoutes } from "../../routers/mainRouts";

const NavigationsLinks = () => {
  return (
    <ul>
      {mainRoutes.map((route) => {
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
      })}
    </ul>
  );
};

export default NavigationsLinks;
