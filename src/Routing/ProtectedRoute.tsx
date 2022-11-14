import { Redirect, Route } from "react-router-dom";
import ROUTE_CONST from "./RouteConstants";

const PrivateRoute = ({ children, ...rest }: any) => {
  const token = sessionStorage.getItem("user");
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return token ? (
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

// const mapStateToProps = ({ user: { data } }: any) => ({
//   user: data,
// });

export default PrivateRoute;
