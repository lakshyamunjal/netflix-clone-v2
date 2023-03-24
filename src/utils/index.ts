import i18next from "i18next";

const handleLanguageChange = async (language: string) => {
  i18next.changeLanguage(language);
};

const isDevelopment = () => {
  return process.env.NODE_ENV?.toLowerCase() === "development";
};

export { handleLanguageChange, isDevelopment };
