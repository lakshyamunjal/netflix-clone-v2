import React from "react";

import "./storyCard-styles.scss";

const StoryCard = (props) => {
  const {
    isLastStory,
    title,
    subtitle,
    thumbnail,
    video,
    videoPosition,
    videoStyle,
    component,
  } = props;

  const shouldShowVideoRight = videoPosition === "RIGHT";
  let containerClassName = `story-card ${
    shouldShowVideoRight ? "row" : "row-reverse"
  }`;
  const Component = component;
  if (isLastStory) {
    containerClassName += " border-bottom";
  }

  return (
    <div className={containerClassName}>
      <div className="story-card-left">
        <div className="title">{title}</div>
        <div className="sub-title">{subtitle}</div>
      </div>
      <div
        className="story-card-right"
        style={{
          marginLeft: shouldShowVideoRight ? "50px" : "",
        }}
      >
        <img src={thumbnail} className="image" alt="thumbnail" />
        {!!video && (
          <video
            src={video}
            muted
            style={{
              position: "absolute",
              ...videoStyle,
            }}
            autoPlay
            loop
          />
        )}
        {Component && <Component />}
      </div>
    </div>
  );
};

export default StoryCard;
