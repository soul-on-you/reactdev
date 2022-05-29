const defaultStore = {
  cash: 1000,
};

const ADD_CASH = "ADD_CASH";
export const ASYNC_ADD_CASH = "ASYNC_ADD_CASH";
const GET_CASH = "GET_CASH";
export const ASYNC_GET_CASH = "ASYNC_GET_CASH";

const cashReducer = (state = defaultStore, action) => {
  switch (action.type) {
    case ADD_CASH:
      return { ...state, cash: state.cash + action.payload };
    case GET_CASH:
      return { ...state, cash: state.cash - action.payload };
    default:
      return state;
  }
};

export default cashReducer;

export const addCashAction = (payload) => {
  return { type: ADD_CASH, payload };
};

export const asyncAddCashAction = (payload) => {
  return { type: ASYNC_ADD_CASH, payload };
};

export const getCashAction = (payload) => {
  return { type: GET_CASH, payload };
};

export const asyncGetCashAction = (payload) => {
  return { type: ASYNC_GET_CASH, payload };
};
