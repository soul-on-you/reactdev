import React from "react";
import classes from "./CustomButton.module.css";

function CustomButton({ children, ...props }) {
  return <button className={classes.customBtn} {...props}>{children}</button>;
}

export default CustomButton;
