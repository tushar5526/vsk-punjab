import { Redirect, Route } from "react-router-dom";
import ROUTE_CONST from "./RouteConstants";

const PrivateRoute = ({ children, ...rest }: any) => {
  const user = localStorage.getItem("user");
  const token = sessionStorage.getItem("user");
  const userExists = user && token;
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return userExists ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: ROUTE_CONST.login,
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default PrivateRoute;
