import { useState } from "react";
import Dashpanel from "./components/Dashpanel/Dashpanel";
import Dropdown from "./components/Dropdown/Dropdown";
import Header from "./components/Header/Header";
import InvoiceItem from "./components/Invoices/InvoiceItem";

const App = () => {
	const [open, setOpen] = useState(false);
	return (
		<div className="grid-container">
			<Header />
			<Dashpanel filterClicked={open} setFilterClicked={setOpen} />

			<InvoiceItem />
		</div>
	);
};

export default App;
