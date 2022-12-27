import { Redirect, Route } from "react-router-dom";
import ROUTE_CONST from "./RouteConstants";

const PrivateRoute = ({ children, ...rest }: any) => {
  return (
    localStorage.getItem("user") ? <Route
      {...rest}
    /> :
      <Redirect to={"/login"} />
  );
};


export default PrivateRoute;
