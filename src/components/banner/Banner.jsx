import React from "react";
import { useTranslation } from "react-i18next";

import NavBar from "../navBar/NavBar";

import BannerImage from "../../assets/images/banner.jpeg";

import "./banner-styles.scss";

const TRANSLATION_PREFIX = "screen.landing.banner";

const Banner = () => {
  const { t } = useTranslation();

  return (
    <div className="banner">
      <div className="navbar-container">
        <NavBar />
      </div>
      <div className="banner-background">
        <img src={BannerImage} className="banner-image" />
      </div>
      <div className="banner-text-container">
        <h1 className="title-1">{t(`${TRANSLATION_PREFIX}.title-1`)}</h1>
        <h3 className="title-2">{t(`${TRANSLATION_PREFIX}.title-2`)}</h3>
        <div className="title-3">{t(`${TRANSLATION_PREFIX}.title-3`)}</div>
      </div>
    </div>
  );
};

export default Banner;
