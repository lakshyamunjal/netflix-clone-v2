import React from "react";
import { useTranslation } from "react-i18next";

import Banner from "../../components/banner/Banner";
import StoryCard from "../../components/story-card/StoryCard";
import NavBar from "../../components/navBar/NavBar";
import Faqs from "../../components/faqs/Faqs";

import STORY_CARD_DATA from "./constants";

import "./rootScreen-styles.scss";

const TRANSLATION_PREFIX = "screen.landing.banner";

const RootScreen = () => {
  const { t } = useTranslation();

  const renderStories = () => {
    return STORY_CARD_DATA.map((item, index) => {
      const {
        titleKey,
        subtitleKey,
        videoPosition,
        thumbnail,
        video,
        videoStyle,
        component,
      } = item;
      return (
        <StoryCard
          key={index}
          isLastStory={index === STORY_CARD_DATA.length - 1}
          title={t(titleKey)}
          subtitle={t(subtitleKey)}
          videoPosition={videoPosition}
          thumbnail={thumbnail}
          video={video}
          videoStyle={videoStyle}
          component={component}
        />
      );
    });
  };

  return (
    <div className="home">
      <Banner>
        <NavBar showRightButton />
        <div className="banner-text-container">
          <h1 className="title-1">{t(`${TRANSLATION_PREFIX}.title-1`)}</h1>
          <h3 className="title-2">{t(`${TRANSLATION_PREFIX}.title-2`)}</h3>
        </div>
      </Banner>
      {renderStories()}
      <Faqs />
    </div>
  );
};

export default RootScreen;
