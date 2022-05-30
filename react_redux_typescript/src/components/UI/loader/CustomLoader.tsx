import React from "react";
import styles from "./CustomLoader.module.css";

interface ILoaderProps {}

const Loader: React.FunctionComponent<ILoaderProps> = (props) => {
  return <div className={styles.customLoader}></div>;
};

export default Loader;
