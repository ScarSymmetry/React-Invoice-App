import { useHistory } from 'react-router';
import { numberFormatter, dateFormatter } from '../../../utils/formatters';
import { useSelector } from 'react-redux';
import styles from './InvoiceItem.module.scss';
import empty from '../../../assets/illustration-empty.svg';

const InvoiceItem = () => {
  const history = useHistory();
  const { invoices, statusFilter } = useSelector((state) => state.invoices);

  console.log(statusFilter);

  // const statusFilter = '';
  const getFilteredInvoices = () => {
    if (statusFilter === 'paid') {
      return invoices.filter((invoice) => invoice.status === 'paid');
    }
    if (statusFilter === 'pending') {
      return invoices.filter((invoice) => invoice.status === 'pending');
    }
    if (statusFilter === 'draft') {
      return invoices.filter((invoice) => invoice.status === 'draft');
    }
    return invoices;
  };

  const invoicesToRender = getFilteredInvoices();

  if (!invoicesToRender || invoicesToRender.length === 0) {
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
        {invoicesToRender.map((user) => {
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
