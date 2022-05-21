import React from "react";
import classes from "./CustomModal.module.css";

function CustomModal({ children, visible, setVisible }) {
  const rootClasses = [classes.customModal];

  if (visible) {
    rootClasses.push(classes.active);
  }

  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div
        className={classes.customModalContent}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export default CustomModal;
