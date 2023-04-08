import i18next from "i18next";
import decode from "jwt-decode";

const isValidToken = (jwtToken: string) => {
  let isValid = false;
  try {
    decode(jwtToken);
    isValid = true;
  } catch {}
  return isValid;
};

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

const setLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

const getLocalStorage = (key: string) => {
  return localStorage.getItem(key) || '';
};

export {
  getLocalStorage,
  handleLanguageChange,
  isDevelopment,
  isValidEmail,
  isValidPassword,
  isValidToken,
  setLocalStorage,
};
