import { configureStore } from '@reduxjs/toolkit';
import invoiceReducer from './invoices';

export default configureStore({
  reducer: {
    invoices: invoiceReducer,
  },
});
