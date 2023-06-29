import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { getLocalStorage, isValidToken } from "../utils";

import ROUTES from "../routes/constants";
import { LOCAL_STORAGE_KEYS } from "../utils/constants";

const useAuthentication = () => {
  const history = useHistory();

  useEffect(() => {
    const token = getLocalStorage(LOCAL_STORAGE_KEYS.JWT_TOKEN);
    const isUserAuthenticated = isValidToken(token);
    if (isUserAuthenticated) history.push(ROUTES.HOME);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useAuthentication;
