import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import Loader from "../../components/loader/Loader";
import NavBar from "../../components/navBar/NavBar";

import useEmailLogin from "../../custom-hooks/useEmailLogin";

import { isValidEmail, isValidPassword } from "../../utils";

import "./loginScreen-styles.scss";

const TRANSLATION_PREFIX = "screen.login";

const LoginScreen = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ email: false, password: false });
  const [isLoaderActive, setIsLoaderActive] = useState(false);
  const { loginUser } = useEmailLogin(email, password);

  const handleLogin = async () => {
    const isPasswordValid = isValidPassword(password);
    const isEmailValid = isValidEmail(email);
    setError({ email: !isEmailValid, password: !isPasswordValid });

    if (isEmailValid && isPasswordValid) {
      setIsLoaderActive(true);
      await loginUser();
      setIsLoaderActive(false);
    }
  };

  return (
    <div className="login">
      <NavBar />
      <div className="login-form-container">
        <div className="login-form">
          <h1 className="heading">{t(`${TRANSLATION_PREFIX}.heading`)}</h1>
          <Input
            label={t(`${TRANSLATION_PREFIX}.email`)}
            inputStyle={{ marginBottom: "20px", width: "100%" }}
            isError={error.email}
            errorMessage={t(`${TRANSLATION_PREFIX}.error.email`)}
            value={email}
            handleInputChange={(value) => {
              if (error.email) {
                setError({ ...error, email: false });
              }
              setEmail(value);
            }}
          />
          <Input
            label={t(`${TRANSLATION_PREFIX}.password`)}
            inputStyle={{ marginBottom: "20px", width: "100%" }}
            type="password"
            isError={error.password}
            errorMessage={t(`${TRANSLATION_PREFIX}.error.password`)}
            value={password}
            handleInputChange={(value) => {
              if (error.password) {
                setError({ ...error, password: false });
              }
              setPassword(value);
            }}
          />
          <Button
            text={t(`${TRANSLATION_PREFIX}.get-in`)}
            buttonStyle={{
              fontFamily: "Medium",
              width: "100%",
              fontSize: "18px",
            }}
            onClick={handleLogin}
          />
        </div>
      </div>
      <Loader isLoaderActive={isLoaderActive} />
    </div>
  );
};

export default LoginScreen;
