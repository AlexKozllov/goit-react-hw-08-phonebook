import React, { Suspense, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../redux/operations/authOperation";
import { getError } from "../redux/selectors/authSelectors";
import Layout from "./Layout";

import ModalLoader from "./loader/ModalLoader";
import { mainRoutes } from "../routers/mainRouts";
import PrivateRoute from "./navigations/privatRoute/PrivateRoute";
import PublicRoute from "./navigations/publicRoute/PublicRoute";
import { Switch, useLocation } from "react-router-dom";
import ErrorMess from "./errorMess/ErrorMess";

const App = () => {
  const isError = useSelector((state) => getError(state));
  const dispatch = useDispatch();
  let location = useLocation();
  useEffect(() => {
    dispatch(refreshUser());
  }, []);
  return (
    <Layout>
      <Switch>
        <Suspense fallback={<ModalLoader />}>
          {mainRoutes.map((route) =>
            route.private ? (
              <PrivateRoute key={route.path} {...route} />
            ) : (
              <PublicRoute key={route.path} {...route} />
            )
          )}
        </Suspense>
      </Switch>
      {isError && location.pathname === "/login" && <ErrorMess />}
    </Layout>
  );
};

export default App;
