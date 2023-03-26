const AUTH_ERROR_CODES = {
  USER_NOT_FOUND: "auth/user-not-found",
  WRONG_PASSWORD: "auth/wrong-password",
  USER_EXISTS: "auth/email-already-exists",
  WEAK_PASSWORD: "auth/weak-password", // must be a string with at least six characters.
  USER_DISABLED: "auth/user-disabled",
};

export { AUTH_ERROR_CODES };
