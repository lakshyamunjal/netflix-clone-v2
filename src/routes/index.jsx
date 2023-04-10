import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import ErrorScreen from "../screens/error/ErrorScreen";
import HomeScreen from "../screens/home/HomeScreen";
import LoginScreen from "../screens/login/LoginScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import RootScreen from "../screens/root/RootScreen";

import { getLocalStorage, isValidToken } from "../utils";

import { LOCAL_STORAGE_KEYS } from "../utils/constants";
import ROUTES from "./constants";

const isAuthenticated = () => {
  const isLoginValid = isValidToken(
    getLocalStorage(LOCAL_STORAGE_KEYS.JWT_TOKEN)
  );
  return isLoginValid;
};

/**
 * any route which needs authentication to visit should be rendered using this component
 */
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: ROUTES.LOGIN,
            }}
          />
        )
      }
    />
  );
};

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.ROOT} component={RootScreen} exact />
        <Route path={ROUTES.LOGIN} component={LoginScreen} />
        <PrivateRoute path={ROUTES.PROFILE} component={ProfileScreen} />
        <PrivateRoute path={ROUTES.HOME} component={HomeScreen} />
        <Route path={ROUTES.ERROR} component={ErrorScreen} />
      </Switch>
    </Router>
  );
};

export default Routes;
