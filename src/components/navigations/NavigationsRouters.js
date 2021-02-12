import React, { Suspense } from "react";
import { Switch } from "react-router-dom";

import { mainRoutes } from "../../routers/mainRouts";
import ModalLoader from "../loader/ModalLoader";
import PrivateRoute from "./privatRoute/PrivateRoute";
import PublicRoute from "./publicRoute/PublicRoute";

const NavigationsRouters = () => {
  return (
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
  );
};

export default NavigationsRouters;
