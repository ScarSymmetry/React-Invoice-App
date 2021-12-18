import Modal from '../Modal/Modal';
import styles from './DeletePopup.module.scss';
import { useRef, useContext } from 'react';
import useClickOutside from '../hooks/useClickOutside';
import { DispatchContext } from '../../context/invoices.context';

const DeletePopup = ({ open, onClickOutside, invoiceId }) => {
  const dispatch = useContext(DispatchContext);
  const modalRef = useRef();
  useClickOutside(modalRef, () => {
    if (open) onClickOutside(false);
  });

  console.log(typeof invoiceId);

  const deleteInvoice = () => {
    dispatch({ type: 'DELETE_INVOICE', payload: invoiceId});
    onClickOutside(false);
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
            className={`${styles.buttonComponent} ${styles.cancelAndDiscardButton}`}
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
