import Dashpanel from "./components/Dashpanel/Dashpanel";
import Dropdown from "./components/Dropdown/Dropdown";
import Header from "./components/Header/Header";
import InvoiceItem from "./components/Invoices/InvoiceItem";

const App = () => {
	return (
		<>
			<Header />
			<Dashpanel />
			<Dropdown />
			<InvoiceItem />
		</>
	);
};

export default App;
