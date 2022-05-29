const defaultStore = {
  customers: [],
};

const ADD_CUSTOMER = "ADD_CUSTOMER";
const DELETE_CUSTOMER = "DELETE_CUSTOMER";

const customerReducer = (state = defaultStore, action) => {
  switch (action.type) {
    case ADD_CUSTOMER:
      return { ...state, customers: [...state.customers, action.payload] };
    case DELETE_CUSTOMER:
      return {
        ...state,
        customers: state.customers.filter((c) => c.id !== action.payload),
      };
    default:
      return state;
  }
};

export default customerReducer;

export const addCustomerAction = (payload) => {
  return { type: ADD_CUSTOMER, payload };
};

export const deleteCustomerAction = (payload) => {
  return { type: DELETE_CUSTOMER, payload };
};
