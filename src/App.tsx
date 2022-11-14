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
import ROUTE_CONST from "./Routing/RouteConstants";
import "./App.css"
import ControlledTabs from "./pages/ControlledTabs";
import Mobile from './pages/Mobile';
import Screen1 from "./pages/VedioWall/Screen1";
import Screen2 from "./pages/VedioWall/Screen2";
import Screen3 from "./pages/VedioWall/Screen3/Index";
import Screen4 from "./pages/VedioWall/Screen4";

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
            <PrivateRoute exact path={ROUTE_CONST.assess_res} component={Mobile} />
            <PrivateRoute exact path={ROUTE_CONST.vdo_wall_1} component={Screen1} />
            <PrivateRoute exact path={ROUTE_CONST.vdo_wall_2} component={Screen2} />
            <PrivateRoute exact path={ROUTE_CONST.vdo_wall_3} component={Screen3} />
            <PrivateRoute exact path={ROUTE_CONST.vdo_wall_4} component={Screen4} />
            <PrivateRoute exact path={ROUTE_CONST.root} component={ControlledTabs} />
            <Route />
          </Switch>
        </Router>
      </IframeContextContext.Provider>
    </div>
  );
};



export default App;

