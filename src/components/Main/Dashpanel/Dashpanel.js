import { useState } from 'react';
import styles from './Dashpanel.module.scss';
import arrow from '../../../assets/icon-arrow-down.svg';
import Dropdown from '../Dropdown/Dropdown';
import { useContext } from 'react';
import {
  InvoicesContext,
  DispatchContext,
} from '../../../context/invoices.context';

const Dashpanel = ({ setInvoiceFilterStatus }) => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const { initialInvoices } = useContext(InvoicesContext);
  const dispatch = useContext(DispatchContext);

  const InvoicesQuantity = initialInvoices.length;

  return (
    <nav className={styles.navWrapper}>
      <div className={styles.invoiceCount}>
        <h2>Invoices</h2>
        <p>{`${InvoicesQuantity} invoice${
          InvoicesQuantity === 1 ? '' : 's'
        }`}</p>
      </div>
      <button
        className={styles.filterBtn}
        onClick={(e) => {
          setDropDownOpen(!dropDownOpen);
        }}
      >
        <span>
          Filter{' '}
          <img
            className={dropDownOpen ? styles.active : undefined}
            src={arrow}
            alt='filter'
          />
        </span>
      </button>
      <button
        onClick={() =>
          dispatch({
            type: 'OPEN_FORM',
            payload: { isToggled: true, isEditing: false },
          })
        }
        className={styles.btnInvoice}
      >
        <span className={styles.mobileInvoice}>New</span>
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
