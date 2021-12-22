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

    case 'SET_FILTER': {
      const currentStatus = state.statusCheckbox.map((checkbox) => {
        if (checkbox.id === action.payload) {
          return { ...checkbox, checked: !checkbox.checked };
        }
        return { ...checkbox, checked: false };
      });

      return {
        ...state,
        statusCheckbox: [...currentStatus],
      };
    }

    case 'CHANGE_STATUS': {
      return {
        ...state,
        filter: action.payload,
      };
    }

    default:
      return state;
  }
};

export default reducer;
