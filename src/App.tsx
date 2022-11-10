import React, { FC, useEffect, useState } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./App.less";
import DashboardHeader from "./components/layouts/DashboardHeader";
import Login from "./pages/Login";
import PrivateRoute from "./Routing/ProtectedRoute";
import Demo from "./pages/ControlledTabs/Tabs/Performance";
import ROUTE_CONST from "./Routing/RouteConstants";
import "./App.css"
import ControlledTabs from "./pages/ControlledTabs";

export const IframeContextContext = React.createContext({
  updateHasFirstIframeLoaded: null,
  hasFirstIframeLoaded: null,
} as any);

const App: FC = () => {
  const [hasFirstIframeLoaded, setHasFirstIframeLoaded] = useState(false);
  useEffect(() => {
    localStorage.removeItem("hasFirstIframeLoaded");
    const registerServiceWorker = async () => {
      if ("serviceWorker" in navigator) {
        try {
          const registration = await navigator.serviceWorker.register(
            "/sw.js",
            {
              scope: "/",
            }
          );

          if (registration.installing) {
            console.log("Service worker installing");
          } else if (registration.waiting) {
            console.log("Service worker installed");
            // window.location.reload();
          } else if (registration.active) {
            console.log("Service worker active");
          }
        } catch (error) {
          console.error(`Registration failed with ${error}`);
        }
      }
    };
    registerServiceWorker();
  }, []);

  function updateHasFirstIframeLoaded(v: boolean) {
    setHasFirstIframeLoaded(v);
  }

  return (
    <div className="App">
      <IframeContextContext.Provider
        value={{ hasFirstIframeLoaded, updateHasFirstIframeLoaded }}
      >
        <Router>
          {<DashboardHeader />}
          <Switch>
            <Route exact path={ROUTE_CONST.login} component={Login} />
            <PrivateRoute exact path={ROUTE_CONST.root}>
              <ControlledTabs />
            </PrivateRoute>
          </Switch>
        </Router>
      </IframeContextContext.Provider>
    </div>
  );
};



export default App;
