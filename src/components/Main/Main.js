import InvoiceItem from './Invoices/InvoiceItem';
import Dashpanel from './Dashpanel/Dashpanel';

import styles from './Main.module.scss';

const Main = ({ setInvoiceFilterStatus, setFormOpened }) => {
  return (
    <div className={styles.generalView}>
      <Dashpanel
        setInvoiceFilterStatus={setInvoiceFilterStatus}
        setFormOpened={setFormOpened}
      />
      <InvoiceItem />
    </div>
  );
};

export default Main;
