import React, { useCallback, useRef } from "react";
import { observer } from "mobx-react-lite";

import Card from "../card/Card";

import "./contentRow-styles.scss";

const ContentRow = (props) => {
  const { title, list = [], isLargeRow = false, type, loadMore } = props;

  const observerRef = useRef();

  const lastCardCallback = useCallback((node) => {
    if (node) {
      observerRef.current?.disconnect();
      observerRef.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            loadMore(type);
          }
        },
        {
          threshold: 0.75,
        }
      );
      observerRef.current.observe(node);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderCards = () => {
    return list?.map((item, index) => {
      const { backdropPath, posterPath } = item;

      let url = "";
      if (!posterPath?.includes("null")) {
        url = posterPath;
      } else if (!backdropPath?.includes("null")) {
        url = backdropPath;
      }
      if (isLargeRow) {
        url = backdropPath;
      }

      return (
        !!url && (
          <span
            key={`${url}-${index}`}
            ref={index === list.length - 1 ? lastCardCallback : null}
          >
            <Card imageUrl={url} isLarge={isLargeRow} />
          </span>
        )
      );
    });
  };

  return (
    <div className="content-row">
      <h2 className="content-row-title">{title}</h2>
      <div className="content-row-list">{renderCards()}</div>
    </div>
  );
};

export default observer(ContentRow);
