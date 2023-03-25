import React from "react";
import { useTranslation } from "react-i18next";

import Banner from "../../components/banner/Banner";
import StoryCard from "../../components/story-card/StoryCard";
import STORY_CARD_DATA from "./constants";

import "./rootScreen-styles.scss";

const HomeScreen = () => {
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
      <Banner />
      {renderStories()}
      {/* faqs */}
      {/* help */}
    </div>
  );
};

export default HomeScreen;
