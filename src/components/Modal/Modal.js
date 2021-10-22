import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";

const rootModal = document.getElementById("modal");

const Modal = ({ children, isOpen = false }) => {
	if (!isOpen) return null;
	return createPortal(
		<div className={styles.modalWrapper}>{children}</div>,
		rootModal
	);
};

export default Modal;
