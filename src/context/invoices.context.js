import React, { createContext } from "react";
import { useLocalStorageReducer } from "../components/hooks/useLocalStorageReducer";
import invoiceReducer from "./reducers/invoices.reducer";
import data from "../data";

const defaultInvoices = data;

defaultInvoices.filteredInvoices = [...data.initialInvoices];

export const InvoicesContext = createContext();
export const DispatchContext = createContext();

export function InvoicesProvider({ children }) {
	const [invoices, dispatch] = useLocalStorageReducer(
		"invoices",
		defaultInvoices,
		invoiceReducer
	);

	return (
		<InvoicesContext.Provider value={invoices}>
			<DispatchContext.Provider value={dispatch}>
				{children}
			</DispatchContext.Provider>
		</InvoicesContext.Provider>
	);
}
