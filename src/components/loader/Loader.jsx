import React from "react";

import "./loader-styles.scss";

const Loader = (props) => {
  const { isLoaderActive, showDarkBackground = false } = props;

  const className = `loader-background ${
    showDarkBackground ? "dark-background" : ""
  }`;

  return (
    isLoaderActive && (
      <div className={className}>
        <div className="loader" />
      </div>
    )
  );
};

export default Loader;
