import React from "react";
import { useTranslation } from "react-i18next";
import {  useHistory } from "react-router-dom";

import Button from "../../components/button/Button";

import ROUTES from "../../routes/constants";

import "./errorScreen-styles.scss";

const TRANSLATION_PREFIX = "screen.error";

const ErrorScreen = () => {
  const history = useHistory();
  const { t } = useTranslation();

  return (
    <div className="error">
      <header>
        <h1 className="netflix">Netflix</h1>
      </header>
      <div className="content">
        <div className="title">{t(`${TRANSLATION_PREFIX}.title`)}</div>
        <div className="subtitle">
        {t(`${TRANSLATION_PREFIX}.subtitle`)}
        </div>
        <Button
          text={t(`${TRANSLATION_PREFIX}.btn`)}
          onClick={() => {
            history.push(ROUTES.ROOT);
          }}
          buttonStyle={{
            marginTop: "20px",
            fontSize: "1.25rem",
            color: "black",
            backgroundColor: "white",
            fontFamily: "Medium",
          }}
        />
      </div>
    </div>
  );
};

export default ErrorScreen;
