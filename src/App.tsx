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
import Screen1 from "./pages/VedioWall/Screen1";
import Screen2 from "./pages/VedioWall/Screen2";
import Screen3 from "./pages/VedioWall/Screen3/Index";
import Screen4 from "./pages/VedioWall/Screen4";
import CustomMap from "./components/CustomMap/CustomMap";
import Screen2Header from "./components/layouts/Screen2Header";
import Screen1Header from "./components/layouts/Screen1Header";
import { getUserFromLS } from "./utils";
import { addUserToState } from './redux/user/actions';
import { connect } from 'react-redux/es/exports';
import ScreenPoc from './pages/VedioWall/ScreenPoc/index';
import ScreenPoc2 from "./pages/VedioWall/ScreenPoc2";
export const IframeContextContext = React.createContext({
  updateHasFirstIframeLoaded: null,
  hasFirstIframeLoaded: null,
} as any);

const App: FC = ({ _addUserToState }: any) => {
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
    // _addUserToState()
  }, []);

  function updateHasFirstIframeLoaded(v: boolean) {
    setHasFirstIframeLoaded(v);
  }



  const CreateHeaderContext = ({ comp: Comp }: {
    comp: any
  }) => {
    return (
      <>
        <DashboardHeader />
        <Comp />
      </>
    )
  }

  const CreateHeaderContextForScreen1 = ({ comp: Comp }: {
    comp: any
  }) => {
    return (
      <>
        <Screen1Header />
        <Comp />
      </>
    )
  }
  const CreateHeaderContextForScreen2 = ({ comp: Comp }: {
    comp: any
  }) => {
    return (
      <>
        <Screen2Header />
        <Comp />
      </>
    )
  }
  return (
    <div className="App">
      <IframeContextContext.Provider value={{ hasFirstIframeLoaded, updateHasFirstIframeLoaded }}>
        <Router>
          <Switch>
            <Route exact path={ROUTE_CONST.login} component={() => <CreateHeaderContext comp={Login} />} />
            <PrivateRoute exact path={ROUTE_CONST.vdo_wall_1} component={() => <CreateHeaderContextForScreen1 comp={Screen1} />} />
            <PrivateRoute exact path={ROUTE_CONST.vdo_wall_2} component={() => <CreateHeaderContextForScreen2 comp={Screen2} />} />
            <PrivateRoute exact path={ROUTE_CONST.vdo_wall_3} component={Screen3} />
            <PrivateRoute exact path={ROUTE_CONST.vdo_wall_4} component={Screen4} />
            <PrivateRoute exact path={ROUTE_CONST.map_test} component={() => <CreateHeaderContext comp={CustomMap} />} />
            <PrivateRoute exact path={ROUTE_CONST.card_poc1} component={() => <CreateHeaderContext comp={ScreenPoc} />} />
            <PrivateRoute exact path={ROUTE_CONST.card_poc2} component={() => <CreateHeaderContext comp={ScreenPoc2} />} />
            <PrivateRoute exact path={ROUTE_CONST.root} component={() => <CreateHeaderContext comp={ControlledTabs} />} />
            <Route />
          </Switch>
        </Router>
      </IframeContextContext.Provider>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  _addUserToState: () => {
    const { data, data: { roleData } } = getUserFromLS()
    dispatch(addUserToState({ roleData, data }))
  }
})

export default connect(null, mapDispatchToProps)(App);

