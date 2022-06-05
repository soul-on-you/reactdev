import React, { memo } from "react";
import styles from "./Button.module.css";

export interface IButtonProps {
  children: string;
  onClick(e?: any): any;
  id?: number;
}

const Button = memo(({ children, onClick, id }: IButtonProps) => {
  if (id) console.log(`RENDER_BUTTON ${id}`);
  return (
    <button className={styles.Button} onClick={onClick}>
      {children}
    </button>
  );
});

export default Button;
