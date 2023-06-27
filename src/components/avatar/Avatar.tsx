import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { Modal } from "@mui/material";

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

  const avatarRef = useRef<HTMLDivElement | null>();

  const handleLogout = () => {
    setLocalStorage(LOCAL_STORAGE_KEYS.JWT_TOKEN, "");
    history.push(ROUTES.ROOT);
  };

  const handleEditProfile = () => {
    history.push(ROUTES.PROFILE);
  };

  const renderPopup = () => {
    let component = <div />;

    if (isPopupVisible) {
      // 40 is avatar height
      // 10 is the margin between avatar and popup
      const top = (avatarRef.current?.offsetTop || 0) + 40 + 10;

      component = (
        <div className="avatar-popup" style={{ top }}>
          {showProfileOption && (
            <button className="avatar-popup-button" onClick={handleEditProfile}>
              {t("edit-profile")}
            </button>
          )}
          <button className="avatar-popup-button" onClick={handleLogout}>
            {t("sign-out")}
          </button>
        </div>
      );
    }

    return component;
  };

  return (
    <div style={containerStyle}>
      <div
        ref={(node) => (avatarRef.current = node)}
        className="avatar"
        style={avatarStyle}
        onClick={() => {
          setIsPopupVisible(!isPopupVisible);
        }}
      />
      <Modal
        open={isPopupVisible}
        onClose={() => {
          setIsPopupVisible(false);
        }}
      >
        {renderPopup()}
      </Modal>
    </div>
  );
};

export default Avatar;
