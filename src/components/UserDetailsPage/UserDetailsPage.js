import styles from './UserDetailsPage.module.scss';
import chevron from '../../assets/icon-arrow-left.svg';

import DeletePopup from './DeletePopup';
import { useParams, useHistory } from 'react-router';
import { useContext, useState, useEffect, useRef } from 'react';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

import {
  InvoicesContext,
  DispatchContext,
} from '../../context/invoices.context';

const UserDetailsPage = () => {
  const { initialInvoices } = useContext(InvoicesContext);
  const dispatch = useContext(DispatchContext);

  const [deletePopUpOpen, setDeletePopUpOpen] = useState(false);

  console.log(initialInvoices);

  const { id } = useParams();
  const ref = useRef(null);

  const history = useHistory();
  const userDataDetails = initialInvoices.find((user) => user.id === id);

  useEffect(() => {
    if (ref && ref.current) {
      disableBodyScroll(ref.current);
    }

    return () => {
      clearAllBodyScrollLocks();
    };
  }, []);

  if (!userDataDetails) return null;

  return (
    <div className={styles.modalBody} ref={ref}>
      <DeletePopup
        open={deletePopUpOpen}
        invoiceId={id}
        onClickOutside={setDeletePopUpOpen}
      />
      <div className={styles.navigationButton}>
        <button
          className={`${styles.backButton} ${styles.backButtonJustifyStart}`}
          onClick={() => history.goBack()}
        >
          <span>
            {' '}
            <img src={chevron} alt='back' />{' '}
          </span>{' '}
          Go back
        </button>
      </div>

      <div className={styles.statusPanel}>
        <h5 className={styles.statusHeading}>Status</h5>
        <div
          className={`${styles.statusState} ${styles[userDataDetails.status]}`}
        >
          <div className={styles.indicator}></div>
          <p className={styles.statusText}>{userDataDetails.status}</p>
        </div>
      </div>

      <section className={styles.invoiceWrapper}>
        <div className={styles.idAndSubject}>
          <h5 className={styles.idNumber}>
            {' '}
            <span>#</span> {userDataDetails.id}
          </h5>
          <p className={styles.subject}>{userDataDetails.description}</p>
        </div>

        <div className={styles.detailedAdress}>
          <p className={styles.street}>
            {userDataDetails.senderAddress.street}
          </p>
          <p className={styles.city}>{userDataDetails.senderAddress.city}</p>
          <p className={styles.postCode}>
            {userDataDetails.senderAddress.postCode}
          </p>
          <p className={styles.country}>
            {userDataDetails.senderAddress.country}
          </p>
        </div>

        <div className={styles.invoicesDetails}>
          <p className={styles.invoiceEvent}>Invoice Date</p>
          <h5 className={styles.invoiceDate}>{userDataDetails.createdAt}</h5>

          <p className={styles.invoiceEvent}>Payment Due</p>
          <h5 className={styles.invoiceDate}>{userDataDetails.paymentDue}</h5>
        </div>

        <div className={styles.billingDetails}>
          <p className={styles.billTo}>Bill To</p>
          <h5 className={styles.clientName}>{userDataDetails.clientName}</h5>
          <p className={styles.billingAdress}>
            {userDataDetails.clientAddress.street}
          </p>
          <p className={styles.billingCity}>
            {userDataDetails.clientAddress.city}
          </p>
          <p className={styles.billingPostCode}>
            {userDataDetails.clientAddress.postCode}
          </p>
          <p className={styles.billingCountry}>
            {userDataDetails.clientAddress.country}
          </p>
        </div>

        <div className={styles.emailDetails}>
          <p className={styles.sentTo}>Sent to</p>
          <h5 className={styles.clientEmail}>{userDataDetails.clientEmail}</h5>
        </div>

        <section className={styles.expandoCheckout}>
          <div
            className={`${styles.expandoCheckoutItem} ${styles.tableHeader}`}
          >
            <h5 className={styles.tableHeader__name}>Item Name</h5>
            <h5 className={styles.tableHeader__QTY}>QTY.</h5>
            <h5 className={styles.tableHeader__price}>Price</h5>
            <h5 className={styles.tableHeader__total}>Total</h5>
          </div>
          {userDataDetails.items.map((item, index) => {
            return (
              <div key={index} className={styles.expandoCheckoutItem}>
                <h5 className={styles.serviceDescription}>{item.name}</h5>
                <h6 className={styles.pricePerItem}>
                  <span className={styles.itemQuantity}>{item.quantity}</span>
                  <span className={styles.multiplier}>X</span>{' '}
                  <span className={styles.singleItemPrice}>{item.price}</span>
                </h6>
                <h5 className={styles.totalItemsPrice}> {item.total}</h5>
              </div>
            );
          })}
          <div className={styles.expandoCheckoutTotals}>
            <p className={styles.expandoCheckoutAmount}>Amount Due</p>
            <h2 className={styles.totalPrice}>{userDataDetails.total}</h2>
          </div>
        </section>
      </section>

      {/* //buttons at the bottom */}

      <div className={styles.buttonWrapper}>
        <button
          onClick={() =>
            dispatch({
              type: 'OPEN_FORM',
              payload: { isEditing: true, isToggled: true },
            })
          }
          className={`${styles.buttonComponent} ${styles.editButton}`}
        >
          Edit
        </button>
        <button
          onClick={() => setDeletePopUpOpen(true)}
          className={`${styles.buttonComponent} ${styles.deleteButton}`}
        >
          Delete
        </button>

        {userDataDetails.status !== 'paid' && (
          <button
            onClick={() => dispatch({ type: 'MARK_PAID', payload: id })}
            className={`${styles.buttonComponent} ${styles.markAsPaidButton}`}
          >
            Mark as Paid
          </button>
        )}
      </div>
    </div>
  );
};

export default UserDetailsPage;
