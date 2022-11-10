import { Redirect, Route } from "react-router-dom";
import ROUTE_CONST from "./RouteConstants";
import { connect } from "react-redux/es/exports"

const PrivateRoute = ({ children, user, ...rest }: any) => {
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

const mapStateToProps = ({ user: { data } }: any) => ({
  user: data,
});

export default connect(mapStateToProps)(PrivateRoute);
