import Dashpanel from "./components/Dashpanel/Dashpanel";
import Header from "./components/Header/Header";
import InvoiceItem from "./components/Invoices/InvoiceItem";

const App = () => {
	return (
		<div>
			<Header />
			<Dashpanel />
			<InvoiceItem />
		</div>
	);
};

export default App;
