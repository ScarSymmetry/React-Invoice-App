import InvoiceItem from "./Invoices/InvoiceItem";
import Dashpanel from "./Dashpanel/Dashpanel";

import styles from "./Main.module.scss";

const Main = ({
	filterClicked,
	setFilterClicked,
	setInvoiceFilterStatus,
	filteredInvoice,
}) => {
	return (
		<div className={styles.generalView}>
			<Dashpanel
				filterClicked={filterClicked}
				setFilterClicked={setFilterClicked}
				setInvoiceFilterStatus={setInvoiceFilterStatus}
			/>
			<InvoiceItem data={filteredInvoice} />
		</div>
	);
};

export default Main;
