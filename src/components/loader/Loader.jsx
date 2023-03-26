import React from "react";

import "./loader-styles.scss";

const Loader = (props) => {
  const { isLoaderActive } = props;
  
  return (
    isLoaderActive && (
      <div className="loader-background">
        <div className="loader" />
      </div>
    )
  );
};

export default Loader;
