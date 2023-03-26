import i18next from "i18next";

const handleLanguageChange = async (language: string) => {
  i18next.changeLanguage(language);
};

const isDevelopment = () => {
  return process.env.NODE_ENV?.toLowerCase() === "development";
};

const isValidEmail = (email: string) => {
  return RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).test(email);
};

const isValidPassword = (password: string) => {
  return password.length >= 6 && password.length <= 32;
};

export { handleLanguageChange, isDevelopment, isValidPassword, isValidEmail };
