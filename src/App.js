import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashpanel from "./components/Dashpanel/Dashpanel";
import Form from "./components/Form/Form";

import Header from "./components/Header/Header";
import InvoiceItem from "./components/Invoices/InvoiceItem";
import DeletePopup from "./components/UserDetailsPage/DeletePopup";
import UserDetailsPage from "./components/UserDetailsPage/UserDetailsPage";
import data from "./data";

const App = () => {
	const [open, setOpen] = useState(false);
	const [userModalOpen, setUserModalOpen] = useState(true);

	const [initialData, setInitialData] = useState(data);
	const [filteredInvoices, setFilteredInvoices] = useState(initialData);

	const [filter, setFilter] = useState("all");

	const handleCheckboxFilter = (filter) => {
		if (filter === "all") {
			setFilteredInvoices(initialData);
			return;
		}
		const newFilter = initialData.filter((user) => user.status === filter);
		setFilteredInvoices(newFilter);
	};

	useEffect(() => {
		handleCheckboxFilter(filter);
	}, [filter, initialData]);

	return (
		<div className="grid-container">
			<Router>
				<Header />
				<Dashpanel
					filterClicked={open}
					setFilterClicked={setOpen}
					filteredData={setFilter}
				/>
				<DeletePopup open={false} />
				<InvoiceItem data={filteredInvoices} />

				<Route path="/invoices/:id">
					<UserDetailsPage open={userModalOpen} userData={initialData} />
				</Route>

				<Form open={false} />
			</Router>
		</div>
	);
};

export default App;
