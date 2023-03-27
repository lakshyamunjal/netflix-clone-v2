import React from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

import Button from "../button/Button";

import ROUTES from "../../routes/constants";

import "./navBar-styles.scss";

const NavBar = (props) => {
  const { showRightButton, rightComponent = null } = props;

  const { t } = useTranslation();
  const history = useHistory();

  const RightComponent = rightComponent;

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
          {RightComponent && <RightComponent />}
        </div>
      </header>
    </div>
  );
};

export default NavBar;
