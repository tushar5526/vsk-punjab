import { Redirect, Route } from "react-router-dom";

export default function LayoutWithSidebar({
  component: Component,
  ...rest
}: any) {
  const user = localStorage.getItem("user");
  const token = sessionStorage.getItem("user");
  const userExists = user && token;
  return (
    <Route
      {...rest}
      render={(props) => {
        return userExists ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        );
      }}
    />
  );
}
