import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { mainRoutes } from "../../routers/mainRouts";
import ModalLoader from "../loader/ModalLoader";

const NavigationsRouters = () => {
  return (
    <Suspense fallback={<ModalLoader />}>
      <Switch>
        {mainRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exect}
            component={route.component}
          />
        ))}
      </Switch>
    </Suspense>
  );
};

export default NavigationsRouters;
