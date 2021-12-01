const reducer = (state, action) => {
  switch (action.type) {
    case 'FILTER_INVOICE': {
      if (!action.status) {
        return {
          ...state,
          filteredInvoices: [...state.initialInvoices],
        };
      }
      return {
        ...state,
        filteredInvoices: [
          ...state.initialInvoices.filter(
            (user) => user.status === action.status
          ),
        ],
      };
    }

    case 'ADD_INVOICE': {
      return {
        ...state,
        initialInvoices: [...state.initialInvoices, { ...action.payload }],
      };
    }

    default:
      return state;
  }
};

export default reducer;
