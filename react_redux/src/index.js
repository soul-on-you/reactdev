import React from "react";
import ReactDOM from "react-dom/client";
import { legacy_createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";

const defaultStore = {
  cash: 1000,
};

const reducer = (state = defaultStore, action) => {
  switch (action.type) {
    case "ADD_CASH":
      return { ...state, cash: state.cash + action.payload };
    case "GET_CASH":
      return { ...state, cash: state.cash - action.payload };
    default:
      return state;
  }
};

const store = legacy_createStore(reducer);
// вторым параметром можно передать defaultStore,
// но лучше передавать сразу в reducer

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
