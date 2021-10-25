import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";

const rootModal = document.getElementById("modal");

const Modal = ({ children, isOpen = false, opaque }) => {
	if (!isOpen) return null;

	return createPortal(
		<div
			className={`${styles.modalWrapper} ${
				opaque ? styles.backgroundOpaque : null
			}`}
		>
			{children}
		</div>,
		rootModal
	);
};

export default Modal;
