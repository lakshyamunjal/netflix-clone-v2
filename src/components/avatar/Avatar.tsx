import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

import { setLocalStorage } from "../../utils";

import { LOCAL_STORAGE_KEYS } from "../../utils/constants";
import ROUTES from "../../routes/constants";

import "./avatar-styles.scss";

interface IAvatarProps {
  avatarStyle?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
  showProfileOption?: boolean;
}

const Avatar: React.FC<IAvatarProps> = (props: IAvatarProps) => {
  const {
    avatarStyle = {},
    containerStyle = {},
    showProfileOption = true,
  } = props;

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

  const handleLogout = () => {
    setLocalStorage(LOCAL_STORAGE_KEYS.JWT_TOKEN, "");
    history.push(ROUTES.ROOT);
  };

  const handleEditProfile = () => {
    history.push(ROUTES.PROFILE);
  };

  return (
    <div style={containerStyle}>
      <div
        className="avatar"
        style={avatarStyle}
        onClick={() => {
          setIsPopupVisible(!isPopupVisible);
        }}
      />
      <div className="avatar-popup" style={popupStyle}>
        {showProfileOption && (
          <button className="avatar-popup-button" onClick={handleEditProfile}>
            {t("edit-profile")}
          </button>
        )}
        <button className="avatar-popup-button" onClick={handleLogout}>
          {t("sign-out")}
        </button>
      </div>
    </div>
  );
};

export default Avatar;
