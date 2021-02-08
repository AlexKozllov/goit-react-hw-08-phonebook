import { lazy } from "react";

export const mainRoutes = [
  {
    path: "/",
    name: "Home",
    exect: true,
    component: lazy(() => import("../pages/home/Home")),
  },
  {
    path: "/register",
    name: "Register",
    exect: true,
    component: lazy(() => import("../pages/signUp/SignUp")),
  },
  {
    path: "/login",
    name: "Login",
    exect: true,
    component: lazy(() => import("../pages/signIn/SignIn")),
  },
  {
    path: "/contacts",
    name: "Contacts",
    exect: true,
    component: lazy(() => import("../pages/contacts/Contacts")),
  },
];
