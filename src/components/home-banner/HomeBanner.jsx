import React from "react";
import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";

import { useStores } from "../../stores";

import "./homeBanner-styles.scss";

const TRANSLATION_PREFIX = "screen.home";

const HomeBanner = () => {
  const {
    domain: {
      home: { banner },
    },
  } = useStores();
  const { t } = useTranslation();

  const { name, overview, posterPath, backdropPath } = banner || {};
  const imagePath = backdropPath?.includes("null") ? posterPath : backdropPath;

  const truncateOverview = () => {
    let result = "";
    if (overview) {
      result = overview?.substring(0, 180) + "...";
    }
    return result;
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${imagePath})`,
        }}
        className="home-banner"
      >
        <div className="home-banner-content">
          <h1 className="home-banner-content-movie-name">{name}</h1>
          <div className="home-banner-content-buttons">
            <button className="home-banner-content-buttons-left">
              {t(`${TRANSLATION_PREFIX}.play`)}
            </button>
            <button className="home-banner-content-buttons-right">
              {t(`${TRANSLATION_PREFIX}.my-list`)}
            </button>
          </div>
          <h2 className="home-banner-content-overview">{truncateOverview()}</h2>
        </div>
      </div>
      <div className="home-banner-fade-bottom" />
    </>
  );
};

export default observer(HomeBanner);
