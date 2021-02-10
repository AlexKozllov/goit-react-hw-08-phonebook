import React, { Suspense } from "react";
// import { useSelector } from "react-redux";
import { Switch } from "react-router-dom";
import { mainRoutes } from "../../routers/mainRouts";
import ModalLoader from "../loader/ModalLoader";
import PrivateRoute from "./privatRoute/PrivateRoute";
import PublicRoute from "./publicRoute/PublicRoute";

const NavigationsRouters = () => {
  // const isAuthintication = useSelector((state) => !!state.auth.token);
  return (
    <Suspense fallback={<ModalLoader />}>
      <Switch>
        {mainRoutes.map((route) =>
          route.private ? (
            <PrivateRoute key={route.path} {...route} />
          ) : (
            <PublicRoute key={route.path} {...route} />
          )
        )}
      </Switch>
    </Suspense>
  );
};

export default NavigationsRouters;

// if (route.restricted & isAuthintication) {
//   return (
//     <Route
//       key={route.path}
//       path={route.path}
//       exact={route.exect}
//       component={route.component}
//     />
//   );
// }
