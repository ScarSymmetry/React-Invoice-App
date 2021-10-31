export const FILTER_INVOICE = "FILTER_INVOICE";
export const ADD_INVOICE = "ADD_INVOICE";
export const EDIT_INVOICE = "EDIT_INVOICE";
export const DELETE_INVOICE = "DELETE_INVOICE";

const reducer = (state, action) => {
	switch (action.type) {
		case FILTER_INVOICE:
			return [...state];
		case ADD_INVOICE:
			return [...state];
		case EDIT_INVOICE:
			return [...state];
		case DELETE_INVOICE:
			return [...state];
		default:
			return state;
	}
};

export default reducer;
