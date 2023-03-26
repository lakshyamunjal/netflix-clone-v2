import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import ROUTES from "../routes/constants";
import { getLocalStorage } from "../utils";
import { LOCAL_STORAGE_KEYS } from "../utils/constants";

const useAuthentication = () => {
  const history = useHistory();

  const isUserAuthenticated =
    getLocalStorage(LOCAL_STORAGE_KEYS.IS_LOGGED_IN) === "true";

  useEffect(() => {
    if (isUserAuthenticated) history.push(ROUTES.HOME);
  }, []);
};

export default useAuthentication;
