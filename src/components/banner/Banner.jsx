import React from "react";

import BannerImage from "../../assets/images/banner.jpeg";

import "./banner-styles.scss";

const Banner = (props) => {
  const { children } = props;

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${BannerImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      {children}
      <div className="banner-fade-bottom" />
    </div>
  );
};

export default Banner;
