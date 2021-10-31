import InvoiceItem from "./Invoices/InvoiceItem";
import Dashpanel from "./Dashpanel/Dashpanel";

import styles from "./Main.module.scss";

const Main = ({ setInvoiceFilterStatus}) => {
	return (
		<div className={styles.generalView}>
			<Dashpanel setInvoiceFilterStatus={setInvoiceFilterStatus} />
			<InvoiceItem/>
		</div>
	);
};

export default Main;
