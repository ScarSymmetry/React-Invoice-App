import React, { createContext } from 'react';
import { useLocalStorageReducer } from '../components/hooks/useLocalStorageReducer';
import invoiceReducer from './reducers/invoices.reducer';
import data from '../data';

const defaultInvoices = {
  initialInvoices: data,
  filter: '',
  statusCheckbox: [
    {
      id: 0,
      value: 'draft',
      checked: false,
    },
    {
      id: 1,
      value: 'pending',
      checked: false,
    },
    {
      id: 2,
      value: 'paid',
      checked: false,
    },
  ],
  formOpen: false,
};

export const InvoicesContext = createContext();
export const DispatchContext = createContext();

export function InvoicesProvider({ children }) {
  const [invoices, dispatch] = useLocalStorageReducer(
    'invoices',
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
