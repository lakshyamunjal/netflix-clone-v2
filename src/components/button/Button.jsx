import React from "react";

import "./button-styles.scss";

const Button = (props) => {
  const {
    buttonStyle = {},
    isDisabled = false,
    leftIcon = null,
    leftIconStyle = {},
    onClick,
    rightIcon = null,
    rightIconStyle = {},
    text,
  } = props;

  return (
    <button
      className={`button ${isDisabled ? "disabled" : ""}`}
      disabled={isDisabled}
      onClick={onClick}
      style={buttonStyle}
    >
      {!!leftIcon && <span style={leftIconStyle}>{leftIcon}</span>}
      {text}
      {!!rightIcon && <span style={rightIconStyle}>{rightIcon}</span>}
    </button>
  );
};

export default Button;
