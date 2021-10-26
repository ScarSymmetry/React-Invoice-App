import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Form from "./components/Form/Form";

import Header from "./components/Header/Header";

import Main from "./components/Main/Main";
import DeletePopup from "./components/UserDetailsPage/DeletePopup";
import UserDetailsPage from "./components/UserDetailsPage/UserDetailsPage";
import data from "./data";

const App = () => {
	const [open, setOpen] = useState(false);

	const [initialData, setInitialData] = useState(data);
	const [filteredInvoices, setFilteredInvoices] = useState(initialData);
	const [Invoicefilter, setInvoiceFilter] = useState("all");

	useEffect(() => {
		const handleCheckboxFilter = (filter) => {
			if (filter === "all") {
				setFilteredInvoices(initialData);
				return;
			}
			const newFilter = initialData.filter((user) => user.status === filter);
			setFilteredInvoices(newFilter);
		};
		handleCheckboxFilter(Invoicefilter);
	}, [Invoicefilter, initialData]);

	return (
		<div className="grid-container">
			<Router>
				<Header />

				<Main
					filterClicked={open}
					setFilterClicked={setOpen}
					setInvoiceFilterStatus={setInvoiceFilter}
					filteredInvoice={filteredInvoices}
				/>

				<Route path="/invoices/:id">
					<UserDetailsPage userData={initialData} />
				</Route>

				<Form open={false} />
			</Router>
		</div>
	);
};

export default App;
