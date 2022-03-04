import Modal from '../Modal/Modal';
import styles from './DeletePopup.module.scss';
import { useRef } from 'react';
import useClickOutside from '../hooks/useClickOutside';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteInvoice } from '../../redux/invoices';

const DeletePopup = ({ open, onClickOutside, invoiceId }) => {
  const dispatch = useDispatch();

  const modalRef = useRef();
  const history = useHistory();

  useClickOutside(modalRef, () => {
    if (open) onClickOutside(false);
  });

  const deleteInvoiceFromStore = () => {
    dispatch(deleteInvoice(invoiceId));
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
            onClick={deleteInvoiceFromStore}
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
