const defaultStore = {
  cash: 1000,
};

const ADD_CASH = "ADD_CASH";
const GET_CASH = "GET_CASH";

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

export const getCashAction = (payload) => {
  return { type: GET_CASH, payload };
};
