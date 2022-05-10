import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import ModalBackdrop from "./ModalBackdrop/ModelBackdrop";
import ModalOverlay from "./ModalOverlay/ModalOverlay";

const portalElement = document.getElementById("overlays");

const Modal = ({ children ,CartToggleHandler}) => {
	return (
		<Fragment>
			{ReactDOM.createPortal(
				<ModalBackdrop  className={styles.backdrop} CartToggleHandler={CartToggleHandler} />,
				portalElement,
			)}
			{ReactDOM.createPortal(
				<ModalOverlay >{children}</ModalOverlay>,
				portalElement,
			)}
		</Fragment>
	);
};
export default Modal;
