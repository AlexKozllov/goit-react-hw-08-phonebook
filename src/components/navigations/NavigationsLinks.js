import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getIsAuthenticated } from "../../redux/selectors/authSelectors";
import { mainRoutes } from "../../routers/mainRouts";
import s from "./navigationsLinks.module.css";

const NavigationsLinks = () => {
  const isAuthenticated = useSelector((state) => getIsAuthenticated(state));

  return (
    <ul className={s.navList}>
      {isAuthenticated
        ? mainRoutes.map((route) => {
            if (route.private & route.restricted) {
              return (
                <li key={route.path} className={s.navItem}>
                  <NavLink
                    to={route.path}
                    exact={route.exact}
                    className={s.navLink}
                    activeClassName={s.activeNavLink}
                  >
                    {route.name}
                  </NavLink>
                </li>
              );
            }
            if (!route.private & !route.restricted) {
              return (
                <li key={route.path} className={s.navItem}>
                  <NavLink
                    to={route.path}
                    exact={route.exact}
                    className={s.navLink}
                    activeClassName={s.activeNavLink}
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
                <li key={route.path} className={s.navItem}>
                  <NavLink
                    to={route.path}
                    exact={route.exact}
                    className={s.navLink}
                    activeClassName={s.activeNavLink}
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
