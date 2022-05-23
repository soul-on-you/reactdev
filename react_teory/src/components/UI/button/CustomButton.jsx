import React from "react";
import classes from "./CustomButton.module.css";

function CustomButton({ isActive, children, ...props }) {
  const rootClasses = [classes.customBtn];

  if (isActive) {
    rootClasses.push(classes.active);
  }
  
  return (
    <button className={rootClasses.join(" ")} {...props}>
      {children}
    </button>
  );
}

export default CustomButton;
