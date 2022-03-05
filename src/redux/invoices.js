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
    updateInvoice: (state, action) => {
      const editedInvoice = state.invoices.find(
        (invoice) => invoice.id === action.payload.id
      );

      Object.assign(editedInvoice, {
        clientName: action.payload.clientName,
        clientAddress: { ...action.payload.clientAddress },
        senderAddress: { ...action.payload.senderAddress },
        clientEmail: action.payload.clientEmail,
        paymentTerms: action.payload.paymentTerms,
        description: action.payload.description,
        id: action.payload.id,
        createdAt: action.payload.createdAt,
        paymentDue: action.payload.paymentDue,
        status: action.payload.status,
        total: action.payload.total,
      });
    },
  },
});

export const { deleteInvoice, markAsPaid, addInvoice, updateInvoice } =
  invoiceSlice.actions;
export default invoiceSlice.reducer;
