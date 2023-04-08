import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

import { setLocalStorage } from "../../utils";

import { LOCAL_STORAGE_KEYS } from "../../utils/constants";
import ROUTES from "../../routes/constants";

import "./avatar-styles.scss";

const Avatar = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const history = useHistory();
  const { t } = useTranslation();

  const popupStyle: React.CSSProperties = isPopupVisible
    ? {
        opacity: "1",
        pointerEvents: "all",
      }
    : {
        opacity: "0",
        pointerEvents: "none",
      };

  return (
    <div>
      <div
        className="avatar"
        onClick={() => {
          setIsPopupVisible(!isPopupVisible);
        }}
      />
      <div className="avatar-popup" style={popupStyle}>
        <button
          className="sign-out-button"
          onClick={() => {
            setLocalStorage(LOCAL_STORAGE_KEYS.JWT_TOKEN, "");
            history.push(ROUTES.ROOT);
          }}
        >
          {t("sign-out")}
        </button>
      </div>
    </div>
  );
};

export default Avatar;
