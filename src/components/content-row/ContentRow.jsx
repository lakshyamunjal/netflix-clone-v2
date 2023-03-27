import React from "react";

import Card from "../card/Card";

import "./contentRow-styles.scss";

const ContentRow = (props) => {
  const { title, list = [], isLargeRow = false } = props;

  const renderCards = () => {
    return list.map((item) => {
      const { backdropPath, posterPath } = item;
      let url = "";
      if (!posterPath.includes("null")) {
        url = posterPath;
      } else if (!backdropPath.includes("null")) {
        url = backdropPath;
      }
      if (isLargeRow) {
        url = backdropPath;
      }

      return !!url && <Card key={url} imageUrl={url} isLarge={isLargeRow} />;
    });
  };

  return (
    <div className="content-row">
      <h2 className="content-row-title">{title}</h2>
      <div className="content-row-list">{renderCards()}</div>
    </div>
  );
};

export default ContentRow;
