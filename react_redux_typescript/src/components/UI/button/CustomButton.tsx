import React, { MouseEventHandler } from "react";
import styles from "./CustomButton.module.css";

interface IButtonProps {
  isActive: boolean;
  children: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FunctionComponent<IButtonProps> = ({
  isActive,
  children,
  onClick,
}) => {
  const rootClasses = [styles.customBtn];

  if (isActive) {
    rootClasses.push(styles.active);
  }

  return (
    <button className={rootClasses.join(" ")} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
