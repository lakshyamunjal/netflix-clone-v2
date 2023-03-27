import React from "react";
import { observer } from "mobx-react-lite";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { useStores } from "../../stores";

import "react-lazy-load-image-component/src/effects/blur.css";
import "./card-styles.scss";

interface ICardProps {
  imageUrl: string;
  isLarge?: boolean;
}

const Card: React.FC<ICardProps> = (props: ICardProps) => {
  const { imageUrl, isLarge = false } = props;

  const {
    ui: { loading, handleLoader },
  } = useStores();

  const className = isLarge ? "card large-card" : "card";

  return (
    <LazyLoadImage
      effect="blur"
      afterLoad={() => {
        if (loading.home) {
          handleLoader("home", false);
        }
      }}
      src={imageUrl}
      className={className}
    />
  );
};

export default observer(Card);
