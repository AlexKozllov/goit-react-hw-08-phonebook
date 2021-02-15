import { lazy } from "react";

export const mainRoutes = [
  {
    path: "/",
    name: "Home",
    exact: true,
    component: lazy(() => import("../pages/home/Home")),
    private: false,
    restricted: false,
  },
  {
    path: "/register",
    name: "Register",
    exact: true,
    component: lazy(() => import("../pages/signUp/SignUp")),
    private: false,
    restricted: true,
  },
  {
    path: "/login",
    name: "Login",
    exact: true,
    component: lazy(() => import("../pages/signIn/SignIn")),
    private: false,
    restricted: true,
  },
  {
    path: "/contacts",
    name: "Contacts",
    exact: true,
    component: lazy(() => import("../pages/contacts/Contacts")),
    private: true,
    restricted: true,
  },
];
