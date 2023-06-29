import React from "react";
import { useTranslation } from "react-i18next";

import StrangerThings from "../../assets/images/stranger-things.png";
import Download from "../../assets/icons/download.gif";

import "./mobileDownloadLanding-styles.scss";

const TRANSLATION_PREFIX = "components.mobile-download";

const MobileDownloadLanding = () => {
  const { t } = useTranslation();

  return (
    <div className="mobile-download-landing">
      <img src={StrangerThings} className="left" alt="stranger-things" />
      <div className="middle">
        <div className="title">{t(`${TRANSLATION_PREFIX}.name`)}</div>
        <div className="sub-title">
          {t(`${TRANSLATION_PREFIX}.downloading`)}
        </div>
      </div>
      <img className="right" src={Download} alt="download" />
    </div>
  );
};

export default MobileDownloadLanding;
