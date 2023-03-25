import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import RootScreen from "../screens/root/RootScreen";
import ErrorScreen from "../screens/error/ErrorScreen";

import ROUTES from "./constants";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.ROOT} component={RootScreen} exact/>
        <Route path={ROUTES.ERROR} component={ErrorScreen} />
      </Switch>
    </Router>
  );
};

export default Routes;
