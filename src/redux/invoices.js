import { createSlice } from '@reduxjs/toolkit';
import data from '../data';

export const invoiceSlice = createSlice({
  name: 'invoices',
  initialState: {
    invoices: data,
    statusFilter: 'all',
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
    updateInvoice: (state, action) => {
      const editedInvoice = state.invoices.find(
        (invoice) => invoice.id === action.payload.id
      );

      if (editedInvoice) {
        Object.assign(editedInvoice, {
          ...action.payload,
        });
      }
    },
    changeStatus: (state, action) => {
      state.statusFilter = action.payload;
    },
  },
});

export const {
  deleteInvoice,
  markAsPaid,
  addInvoice,
  updateInvoice,
  changeStatus,
} = invoiceSlice.actions;
export default invoiceSlice.reducer;
