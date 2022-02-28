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

    case 'EDIT_INVOICE': {
      const editedInvoice = state.initialInvoices.map((invoices) => {
        if (invoices.id === action.payload.id) {
          return {
            ...invoices,
            ...action.payload.data,
            total: action.payload.total,
          };
        }
        return { ...invoices };
      });
      return {
        ...state,
        initialInvoices: [...editedInvoice],
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
    case 'MARK_PAID': {
      const markAsPaid = state.initialInvoices.map((invoices) => {
        if (invoices.id === action.payload) {
          return {
            ...invoices,
            status: 'paid',
          };
        }
        return invoices;
      });
      return {
        ...state,
        initialInvoices: [...markAsPaid],
      };
    }
    case 'OPEN_FORM': {
      return {
        ...state,
        formOpen: {
          isEditing: action.payload.isEditing,
          isToggled: action.payload.isToggled,
        },
      };
    }

    case 'CHANGE_THEME': {
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    }

    default:
      return state;
  }
};

export default reducer;
