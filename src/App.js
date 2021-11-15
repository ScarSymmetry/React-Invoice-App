import { BrowserRouter as Router, Route } from "react-router-dom";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

import UserDetailsPage from "./components/UserDetailsPage/UserDetailsPage";
import { InvoicesProvider } from "./context/invoices.context";

const App = () => {
	return (
		<div className="grid-container">
			<InvoicesProvider>
				<Router>
					<Header />
					{/* <Main />

					<Route path="/invoices/:id">
						<UserDetailsPage />
					</Route> */}

					<Form open={true} />
				</Router>
			</InvoicesProvider>
		</div>
	);
};

export default App;
