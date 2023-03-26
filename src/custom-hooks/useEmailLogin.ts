import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import { auth } from "../firebase";
import { setLocalStorage } from "../utils";

import ROUTES from "../routes/constants";
import { LOCAL_STORAGE_KEYS } from "../utils/constants";
import { AUTH_ERROR_CODES } from "./constants";

const useEmailLogin = (email: string, password: string) => {
  const history = useHistory();
  const { t } = useTranslation();

  const handleAuthErrors = (errorCode: any, isCreateUser = false) => {
    let message = "";

    switch (errorCode) {
      case AUTH_ERROR_CODES.WEAK_PASSWORD:
        message = t("auth.errors.weak");
        break;

      case AUTH_ERROR_CODES.USER_EXISTS:
        message = t("auth.errors.already-exists");
        break;

      case AUTH_ERROR_CODES.USER_NOT_FOUND:
        if (!isCreateUser) {
          createUser();
        }
        break;

      case AUTH_ERROR_CODES.WRONG_PASSWORD:
        message = t("auth.errors.incorrect-password");
        break;

      case AUTH_ERROR_CODES.USER_DISABLED:
        message = t("auth.errors.disabled");
        break;

      default:
        message = t("something-went-wrong");
        break;
    }
    if (message) {
      toast.error(message);
    }
  };

  const loginUser = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLocalStorage(LOCAL_STORAGE_KEYS.IS_LOGGED_IN, 'true');
      toast.success(t("auth.success.login"));
      history.push(ROUTES.HOME);
    } catch (error: any) {
      handleAuthErrors(error.code, false);
    }
  };

  async function createUser() {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setLocalStorage(LOCAL_STORAGE_KEYS.IS_LOGGED_IN, 'true');
      toast.success(t("auth.success.signup"));
      history.push(ROUTES.HOME);
    } catch (error: any) {
      handleAuthErrors(error.code, true);
    }
  }

  return { loginUser };
};

export default useEmailLogin;
