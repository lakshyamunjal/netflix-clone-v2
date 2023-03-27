import React from "react";

import "./card-styles.scss";

interface ICardProps {
  imageUrl: string;
  isLarge?: boolean;
}

const Card: React.FC<ICardProps> = (props: ICardProps) => {
  const { imageUrl, isLarge = false } = props;

  const className = isLarge ? "card large-card" : "card";

  return <img src={imageUrl} className={className} />;
};

export default Card;
