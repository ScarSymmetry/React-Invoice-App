const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_INVOICE': {
      return {
        ...state,
        initialInvoices: [...state.initialInvoices, { ...action.payload }],
      };
    }
    case 'DELETE_INVOICE': {
      return {
        ...state,
        initialInvoices: [
          ...state.initialInvoices.filter(
            (invoice) => invoice.id !== action.payload
          ),
        ],
      };
    }

    default:
      return state;
  }
};

export default reducer;
