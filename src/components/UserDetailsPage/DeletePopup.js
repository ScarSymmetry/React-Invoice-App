import Modal from '../Modal/Modal';
import styles from './DeletePopup.module.scss';
import { useRef } from 'react';
import useClickOutside from '../hooks/useClickOutside';

const DeletePopup = ({ open, onClickOutside, invoiceId }) => {
  const modalRef = useRef();
  useClickOutside(modalRef, () => {
    if (open) onClickOutside(false);
  });

  return (
    <Modal isOpen={open}>
      <div ref={modalRef} className={styles.popUpBody}>
        <div className={styles.textWrapper}>
          <h3 className={styles.title}>Confirm Deletion</h3>
          <p className={styles.warningText}>
            Are you sure you want to delete invoice #{invoiceId}? This action
            cannot be undone.
          </p>
        </div>

        <div className={styles.buttonWrapper}>
          <button
            onClick={() => onClickOutside(false)}
            className={`${styles.buttonComponent} ${styles.cancelAndDiscardButton}`}
          >
            Cancel
          </button>

          <button
            className={`${styles.buttonComponent} ${styles.deleteButton}`}
          >
            Delete
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeletePopup;
