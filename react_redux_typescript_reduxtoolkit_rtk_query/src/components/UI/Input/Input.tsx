import React from "react";
import styles from "./Input.module.css";

export interface IInputProps {
  id?: number;
  placeholder: string;
  value: string;
  setValue(value: string): void;
}

export default function Input({
  id,
  placeholder,
  value,
  setValue,
}: IInputProps) {
  // const [text, setText] = useState("");

  if (id) console.log(`RENDER INPUT ${id}`);

  return (
    <input
      className={styles.Input}
      placeholder={placeholder}
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      // ref={ref}
      // value={text}
      // onChange={(e) => setText(e.target.value)}
    />
  );
}
