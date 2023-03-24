import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import { isDevelopment } from "../utils";

import en from "./en.json";
import hi from "./hi.json";
// To add more translation, we need to have translation file for every language with the below mapping
export const resources = {
  en: {
    translation: en,
  },
  hi: {
    translation: hi,
  },
};

i18next.use(initReactI18next).init({
  lng: "en", // if you're using a language detector, do not define the lng option
  debug: isDevelopment(), // enable logs in dev env only
  resources,
});
