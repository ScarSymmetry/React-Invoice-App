import { useState } from "react";
import Dashpanel from "./components/Dashpanel/Dashpanel";

import Header from "./components/Header/Header";
import InvoiceItem from "./components/Invoices/InvoiceItem";
import Modal from "./components/Modal/Modal";

const App = () => {
	const [open, setOpen] = useState(false);

	return (
		<div className="grid-container">
			<Modal />
			<Header />
			<Dashpanel filterClicked={open} setFilterClicked={setOpen} />

			<InvoiceItem />
		</div>
	);
};

export default App;
