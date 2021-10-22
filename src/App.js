import { useState } from "react";
import Dashpanel from "./components/Dashpanel/Dashpanel";
import Form from "./components/Form/Form";

import Header from "./components/Header/Header";
import InvoiceItem from "./components/Invoices/InvoiceItem";
import UserDetailsPage from "./components/UserDetailsPage/UserDetailsPage";

const App = () => {
	const [open, setOpen] = useState(false);

	return (
		<div className="grid-container">
			<UserDetailsPage open={true} />
			<Header />
			{/* <Dashpanel filterClicked={open} setFilterClicked={setOpen} />

			<InvoiceItem /> */}

			<Form />
		</div>
	);
};

export default App;
