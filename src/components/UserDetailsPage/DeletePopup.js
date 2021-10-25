import Modal from "../Modal/Modal";
import styles from "./DeletePopup.module.scss";

const DeletePopup = ({ open }) => {
	return (
		<Modal isOpen={open}>
			<div className={styles.popUpBody}>
				<h3>Confirm Deletion</h3>
				<p>
					Are you sure you want to delete invoice X2145? This action cannot be
					undone.
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
