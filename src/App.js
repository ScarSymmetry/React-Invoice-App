import Dashpanel from "./components/Dashpanel/Dashpanel";
import Header from "./components/Header/Header";
import InvoiceList from "./components/InvoiceList";

const App = () => {
	return (
		<div>
			<Header />
			<Dashpanel />
			<InvoiceList />
		</div>
	);
};

export default App;
