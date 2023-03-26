import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ErrorScreen from "../screens/error/ErrorScreen";
import HomeScreen from "../screens/home/HomeScreen";
import LoginScreen from "../screens/login/LoginScreen";
import RootScreen from "../screens/root/RootScreen";

import ROUTES from "./constants";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.ROOT} component={RootScreen} exact />
        <Route path={ROUTES.LOGIN} component={LoginScreen} />
        <Route path={ROUTES.HOME} component={HomeScreen} />
        <Route path={ROUTES.ERROR} component={ErrorScreen} />
      </Switch>
    </Router>
  );
};

export default Routes;
