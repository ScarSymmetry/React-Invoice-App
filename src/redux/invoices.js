import { createSlice } from '@reduxjs/toolkit';
import data from '../data';

export const invoiceSlice = createSlice({
  name: 'invoices',
  initialState: {
    invoices: data,
  },
  reducers: {
    deleteInvoice: (state, action) => {
      state.invoices = state.invoices.filter(
        (invoice) => invoice.id !== action.payload
      );
    },
    markAsPaid: (state, action) => {
      const paidInvoice = state.invoices.findIndex(
        (invoice) => invoice.id === action.payload
      );
      state.invoices[paidInvoice].status = 'paid';
    },
    addInvoice: (state, action) => {
      state.invoices.push(action.payload);
    },
  },
});

export const { deleteInvoice, markAsPaid, addInvoice } = invoiceSlice.actions;
export default invoiceSlice.reducer;
