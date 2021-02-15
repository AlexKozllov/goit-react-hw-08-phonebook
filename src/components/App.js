import React, { Suspense, useEffect } from "react";

import UserMenu from "./userMenu/UserMenu";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../redux/operations/authOperation";
import { getIsAuthenticated } from "../redux/selectors/authSelectors";
import Layout from "./Layout";

import ModalLoader from "./loader/ModalLoader";
import { mainRoutes } from "../routers/mainRouts";
import PrivateRoute from "./navigations/privatRoute/PrivateRoute";
import PublicRoute from "./navigations/publicRoute/PublicRoute";
import { Switch } from "react-router-dom";

const App = () => {
  const isAuthenticated = useSelector((state) => getIsAuthenticated(state));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, []);
  return (
    <Layout>
      {/* <NavigationsLinks /> */}
      {isAuthenticated && <UserMenu />}
      {/* <NavigationsRouters /> */}
      <Switch>
        <Suspense fallback={<ModalLoader />}>
          {mainRoutes.map((route) => {
            console.log("route.private", route.private);
            return route.private ? (
              // <h2>Private</h2>
              <PrivateRoute key={route.path} {...route} />
            ) : (
              // <h2>oublic</h2>

              <PublicRoute key={route.path} {...route} />
            );
          })}
        </Suspense>
      </Switch>
    </Layout>
  );
};

export default App;

//  <Switch>
//    {mainRoutes.map((route) => {
//      // console.log("route", route);
//      return route.private ? (
//        <PrivateRoute key={route.path} {...route} />
//      ) : (
//        <h2>public</h2>
//        // <PublicRoute key={route.path} {...route} />
//      );
//    })}
//  </Switch>;

/* <Route
            path="/"
            exact
            component={lazy(() => import("../pages/home/Home"))}
          />
          <Route
            path="/register"
            exact
            component={lazy(() => import("../pages/signUp/SignUp"))}
          />
          <Route
            path="/login"
            exact
            component={lazy(() => import("../pages/signIn/SignIn"))}
          />
          <Route
            path="/contacts"
            exact
            component={lazy(() => import("../pages/signIn/SignIn"))}
          /> */
