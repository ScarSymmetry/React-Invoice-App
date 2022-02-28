import Modal from '../Modal/Modal';
import styles from './DeletePopup.module.scss';
import { useRef } from 'react';
import useClickOutside from '../hooks/useClickOutside';

import { useHistory } from 'react-router-dom';

const DeletePopup = ({ open, onClickOutside, invoiceId }) => {
  const modalRef = useRef();
  const history = useHistory();
  useClickOutside(modalRef, () => {
    if (open) onClickOutside(false);
  });

  console.log(typeof invoiceId);

  const deleteInvoice = () => {
    onClickOutside(false);
    history.push('/');
  };

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
            className={`${styles.buttonComponent} ${styles.cancelButton}`}
          >
            Cancel
          </button>

          <button
            onClick={deleteInvoice}
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
