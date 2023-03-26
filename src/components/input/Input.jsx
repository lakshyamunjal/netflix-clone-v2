import React, { useMemo } from "react";
import TextField from "@mui/material/TextField";

import "./input-styles.scss";

const Input = (props) => {
  const {
    errorMessage = "",
    handleInputChange,
    inputStyle,
    isError,
    label,
    type = "text",
    value,
  } = props;

  const errorStyle = useMemo(() => {
    return { border: "1px solid red", borderRadius: "6px" };
  }, []);

  const inpStyle = isError ? errorStyle : {};

  return (
    <TextField
      variant="filled"
      label={label}
      error={isError}
      helperText={isError ? errorMessage : ""}
      value={value}
      onChange={(evt) => {
        handleInputChange(evt.target.value);
      }}
      InputProps={{
        disableUnderline: true,
        style: inpStyle,
      }}
      InputLabelProps={{
        style: {
          color: "#8c8c8c",
        },
      }}
      className="input"
      style={inputStyle}
      type={type}
    />
  );
};

export default Input;
