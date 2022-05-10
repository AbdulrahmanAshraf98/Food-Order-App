import React from "react";
import styles from "./ModelBackdrop.module.css";
const ModalBackdrop = ({CartToggleHandler}) => {
	return <div className={styles.backdrop} onClick={CartToggleHandler} />;
};
export default ModalBackdrop;
