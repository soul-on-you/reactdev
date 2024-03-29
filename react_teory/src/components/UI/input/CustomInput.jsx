import React from "react";
import classes from "./CustomInput.module.css";

function CustomInput(props) {
  return <input {...props} className={classes.customInput} />;
}

export default CustomInput;
