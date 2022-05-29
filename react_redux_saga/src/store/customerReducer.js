const defaultStore = {
  customers: [],
};

const ADD_MANY_CUSTOMER = "ADD_MANY_CUSTOMER";
export const ASYNC_ADD_MANY_CUSTOMER = "ASYNC_ADD_MANY_CUSTOMER";
const ADD_CUSTOMER = "ADD_CUSTOMER";
export const ASYNC_ADD_CUSTOMER = "ASYNC_ADD_CUSTOMER";
const DELETE_CUSTOMER = "DELETE_CUSTOMER";
export const ASYNC_DELETE_CUSTOMER = "ASYNC_DELETE_CUSTOMER";

const customerReducer = (state = defaultStore, action) => {
  switch (action.type) {
    case ADD_MANY_CUSTOMER:
      return { ...state, customers: [...state.customers, ...action.payload] };
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

export const addManyCustomerAction = (payload) => {
  return { type: ADD_MANY_CUSTOMER, payload };
};

export const asyncAddManyCustomerAction = (payload) => {
  return { type: ASYNC_ADD_MANY_CUSTOMER, payload };
};

export const addCustomerAction = (payload) => {
  return { type: ADD_CUSTOMER, payload };
};

export const asyncAddCustomerAction = (payload) => {
  return { type: ASYNC_ADD_CUSTOMER, payload };
};

export const deleteCustomerAction = (payload) => {
  return { type: DELETE_CUSTOMER, payload };
};

export const asyncDeleteCustomerAction = (payload) => {
  return { type: ASYNC_DELETE_CUSTOMER, payload };
};
