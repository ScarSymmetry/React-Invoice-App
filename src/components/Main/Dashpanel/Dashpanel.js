import { useState } from 'react';
import styles from './Dashpanel.module.scss';
import arrow from '../../../assets/icon-arrow-down.svg';
import Dropdown from '../Dropdown/Dropdown';
import { useContext } from 'react';
import {
  InvoicesContext,
  DispatchContext,
} from '../../../context/invoices.context';
import { useWindowSize } from '../../hooks/useWindowSize';

const Dashpanel = ({ setInvoiceFilterStatus }) => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const { initialInvoices } = useContext(InvoicesContext);
  const size = useWindowSize();
  const dispatch = useContext(DispatchContext);

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
        onClick={() =>
          dispatch({
            type: 'OPEN_FORM',
            payload: { isToggled: true, isEditing: false },
          })
        }
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
