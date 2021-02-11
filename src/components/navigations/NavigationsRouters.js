import React, { Suspense } from "react";

import { mainRoutes } from "../../routers/mainRouts";
import ModalLoader from "../loader/ModalLoader";
import PrivateRoute from "./privatRoute/PrivateRoute";
import PublicRoute from "./publicRoute/PublicRoute";

const NavigationsRouters = () => {
  return (
    <Suspense fallback={<ModalLoader />}>
      {mainRoutes.map((route) =>
        route.private ? (
          <PrivateRoute key={route.path} {...route} />
        ) : (
          <PublicRoute key={route.path} {...route} />
        )
      )}
    </Suspense>
  );
};

export default NavigationsRouters;
