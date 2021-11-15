import Modal from "../Modal/Modal";
import styles from "./DeletePopup.module.scss";
import { useRef } from "react";
import useClickOutside from "../hooks/useClickOutside";

const DeletePopup = ({ open, onClickOutside, invoiceId }) => {
	const modalRef = useRef();
	useClickOutside(modalRef, () => {
		if (open) onClickOutside(false);
	});

	return (
		<Modal isOpen={open}>
			<div ref={modalRef} className={styles.popUpBody}>
				<h3>Confirm Deletion</h3>
				<p>
					Are you sure you want to delete invoice {invoiceId}? This action
					cannot be undone.
				</p>

				<div className={styles.buttonWrapper}>
					<button>Cancel</button>
					<button>delete</button>
				</div>
			</div>
		</Modal>
	);
};

export default DeletePopup;
