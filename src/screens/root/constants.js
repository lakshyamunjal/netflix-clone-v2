import MobileDownloadLanding from "../../components/mobile-download-landing/MobileDownloadLanding";

import Children from "../../assets/images/children.png";
import Devices from "../../assets/images/device-pile-in.png";
import Mobile from "../../assets/images/mobile.jpeg";
import Tv from "../../assets/images/tv.png";
import Video1 from "../../assets/videos/video-1.m4v";
import Video2 from "../../assets/videos/video-2.m4v";

const TRANSLATION_PREFIX = "screen.landing.stories";

const STORY_CARD_DATA = [
  {
    titleKey: `${TRANSLATION_PREFIX}.one.title`,
    subtitleKey: `${TRANSLATION_PREFIX}.one.subtitle`,
    thumbnail: Tv,
    video: Video1,
    videoPosition: "RIGHT",
    containerStyle: {},
    videoStyle: { left: "13%", top: "20%", maxWidth: "73%" },
  },
  {
    titleKey: `${TRANSLATION_PREFIX}.two.title`,
    subtitleKey: `${TRANSLATION_PREFIX}.two.subtitle`,
    thumbnail: Mobile,
    video: "",
    videoPosition: "LEFT",
    containerStyle: {},
    component: MobileDownloadLanding,
  },
  {
    titleKey: `${TRANSLATION_PREFIX}.three.title`,
    subtitleKey: `${TRANSLATION_PREFIX}.three.subtitle`,
    thumbnail: Devices,
    video: Video2,
    videoPosition: "RIGHT",
    containerStyle: {},
    videoStyle: { left: "20%", top: "8%", maxWidth: "61%" },
  },
  {
    titleKey: `${TRANSLATION_PREFIX}.fourth.title`,
    subtitleKey: `${TRANSLATION_PREFIX}.fourth.subtitle`,
    thumbnail: Children,
    video: "",
    videoPosition: "LEFT",
    containerStyle: "",
  },
];

export default STORY_CARD_DATA;
