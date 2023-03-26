import React from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import ROUTES from "../../routes/constants";

import Button from "../button/Button";

import "./navBar-styles.scss";

const NavBar = (props) => {
  const { showRightButton } = props;

  const { t } = useTranslation();
  const history = useHistory();

  return (
    <div className="navbar-container">
      <header className="navbar">
        <div className="navbar-left">Netflix</div>
        <div className="navbar-right">
          {showRightButton && (
            <Button
              text={t("sign-in")}
              buttonStyle={{ fontFamily: "Medium", fontSize: "18px" }}
              onClick={() => {
                history.push(ROUTES.LOGIN);
              }}
            />
          )}
        </div>
      </header>
    </div>
  );
};

export default NavBar;
