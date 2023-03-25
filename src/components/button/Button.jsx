import React from "react";

import "./button-styles.scss";

const Button = (props) => {
  const {
    text,
    onClick,
    buttonStyle = {},
    leftIcon = null,
    rightIcon = null,
    leftIconStyle = {},
    rightIconStyle = {},
  } = props;

  return (
    <button className="button" style={buttonStyle} onClick={onClick}>
      {!!leftIcon && <span style={leftIconStyle}>{leftIcon}</span>}
      {text}
      {!!rightIcon && <span style={rightIconStyle}>{rightIcon}</span>}
    </button>
  );
};

export default Button;
