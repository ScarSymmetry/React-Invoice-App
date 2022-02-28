import { useState } from 'react';
import styles from './Dashpanel.module.scss';
import arrow from '../../../assets/icon-arrow-down.svg';
import Dropdown from '../Dropdown/Dropdown';

import { useWindowSize } from '../../hooks/useWindowSize';

const Dashpanel = ({ setInvoiceFilterStatus }) => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const initialInvoices = [];
  const size = useWindowSize();

  const InvoicesQuantity = initialInvoices.length;

  return (
    <nav className={styles.navWrapper}>
      <div className={styles.invoiceCount}>
        <h2>Invoices</h2>
        {size.width < 768 ? (
          <p>{`${InvoicesQuantity} invoice${
            InvoicesQuantity === 1 ? '' : 's'
          }`}</p>
        ) : (
          <p>{`There are ${InvoicesQuantity} total invoice${
            InvoicesQuantity === 1 ? '' : 's'
          }`}</p>
        )}
      </div>
      <button
        className={styles.filterBtn}
        onClick={(e) => {
          setDropDownOpen(!dropDownOpen);
        }}
      >
        <span>
          {size.width < 768 ? 'Filter' : 'Filter by status'}

          <img
            className={dropDownOpen ? styles.active : undefined}
            src={arrow}
            alt='filter'
          />
        </span>
      </button>
      <button
        onClick={() => console.log('open form dispatch')}
        className={styles.btnInvoice}
      >
        <span className={styles.mobileInvoice}>
          {size.width < 768 ? 'New' : 'New invoice'}
        </span>
      </button>

      <Dropdown
        open={dropDownOpen}
        setFilterInvoice={setInvoiceFilterStatus}
        onClickOutside={setDropDownOpen}
      />
    </nav>
  );
};

export default Dashpanel;
