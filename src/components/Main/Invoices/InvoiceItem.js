import { useHistory } from 'react-router';
import { useContext } from 'react';
import { InvoicesContext } from '../../../context/invoices.context';
import { numberFormatter, dateFormatter } from '../../../utils/formatters';
import styles from './InvoiceItem.module.scss';
import empty from '../../../assets/illustration-empty.svg';

const InvoiceItem = () => {
  const history = useHistory();
  const { initialInvoices, filter } = useContext(InvoicesContext);

  const getFilteredInvoices = () => {
    if (filter === 'paid') {
      return initialInvoices.filter((invoice) => invoice.status === 'paid');
    }
    if (filter === 'pending') {
      return initialInvoices.filter((invoice) => invoice.status === 'pending');
    }
    if (filter === 'draft') {
      return initialInvoices.filter((invoice) => invoice.status === 'draft');
    }
    return initialInvoices;
  };

  const filteredInvoices = getFilteredInvoices();

  if (!filteredInvoices || filteredInvoices.length === 0) {
    return (
      <section className={styles.invoiceWrapper}>
        <div className={styles.noInvoices}>
          <img src={empty} alt='empty list' />
          <div className={styles.textWrapper}>
            <h2>There is nothing here</h2>
            <p>
              Create and invoice by clicking the <span>New</span> button and get
              started
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.invoiceWrapper}>
      <ul className={styles.invoiceBox}>
        {filteredInvoices.map((user) => {
          const paymentDue = new Date(user.paymentDue);

          return (
            <li
              key={user.id}
              className={styles.frame}
              onClick={() => history.push(`/invoices/${user.id}`)}
            >
              <h3 className={styles.userId}>
                <span>#</span>
                {user.id}
              </h3>
              <p className={styles.userName}>{user.clientName}</p>
              <p className={styles.payment}>
                Due {dateFormatter.format(paymentDue)}
              </p>
              <p className={styles.total}>
                {numberFormatter.format(user.total)}
              </p>
              <div className={`${styles.statusState} ${styles[user.status]}`}>
                <div className={styles.indicator}></div>
                <p className={styles.statusText}>{user.status}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default InvoiceItem;
