import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Skeleton } from "@mui/material";
import { useMediaQuery } from "react-responsive";

import { useStores } from "../../stores";

import "react-lazy-load-image-component/src/effects/blur.css";
import "./card-styles.scss";

interface ICardProps {
  imageUrl: string;
  isLarge?: boolean;
}

interface CardSkeletonData {
  card: { width: number, height: number },
  largeCard: { width: number, height: number },
}

// they should match the dimensions in CSS
const SKELETON_DIMENSIONS: { [key: string]: CardSkeletonData } = {
  desktop: {
    card: { width: 170, height: 255 },
    largeCard: { width: 350, height: 196 },
  },
  mobile: {
    card: { width: 85, height: 134 },
    largeCard: { width: 180, height: 110 },
  },
  tablet: {
    card: { width: 130, height: 196 },
    largeCard: { width: 260, height: 160 },
  },
};

const Card: React.FC<ICardProps> = (props: ICardProps) => {
  const { imageUrl, isLarge = false } = props;

  const [isLoading, setIsLoading] = useState(true);

  const {
    ui: { loading, handleLoader },
  } = useStores();

  const desktop = {
    key: "desktop",
    isActivated: useMediaQuery({
      query: "(min-width: 992px)",
    }),
  };
  const mobile = {
    key: "mobile",
    isActivated: useMediaQuery({
      query: "(max-width: 480px)",
    }),
  };
  const tablet = {
    key: "tablet",
    isActivated: useMediaQuery({
      query: "(min-width: 480px) and (max-width: 830px)",
    }),
  };

  const activatedDevice = [desktop, mobile, tablet].find(
    (device) => device.isActivated
  ) || { key: "mobile", isActivated: true };

  const currentSkeletonDimensions = SKELETON_DIMENSIONS[activatedDevice.key];
  const { card, largeCard } = currentSkeletonDimensions;

  const className = isLarge ? "card large-card" : "card";

  return isLoading ? (
    <Skeleton
      width={isLarge ? largeCard.width : card.width}
      height={isLarge ? largeCard.height : card.height}
      variant="rounded"
      sx={{ bgcolor: "grey.900", marginRight: 1 }}
    >
      <LazyLoadImage
        effect="blur"
        afterLoad={() => {
          if (loading.home) {
            handleLoader("home", false);
          }
          setIsLoading(false);
        }}
        src={imageUrl}
        className={className}
      />
    </Skeleton>
  ) : (
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
