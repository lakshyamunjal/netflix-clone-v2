import React from "react";
import { useTranslation } from "react-i18next";

import Button from "../button/Button";

import "./navBar-styles.scss";

const NavBar = () => {
  const { t } = useTranslation();

  return (
    <header className="navbar">
      <div className="navbar-left">Netflix</div>
      <div className="navbar-right">
        <Button text={t("sign-in")} buttonStyle={{ fontFamily: "Medium" }} />
      </div>
    </header>
  );
};

export default NavBar;
