const defaultStore = {
  customers: [],
};

const customerReducer = (state = defaultStore, action) => {
  switch (action.type) {
    case "ADD_CUSTOMER":
      return { ...state, cash: state.cash + action.payload };
    case "DELETE_CUSTOMER":
      return { ...state, cash: state.cash - action.payload };
    default:
      return state;
  }
};

export default customerReducer;
