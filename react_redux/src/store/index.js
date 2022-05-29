import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import cashReducer from "./cashReducer";
import customerReducer from "./customerReducer";

const reducer = combineReducers({
  cash: cashReducer,
  customers: customerReducer,
});

const store = legacy_createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
// вторым параметром можно передать defaultStore, и 3 мидлвере
// но лучше передавать дефолт стейт сразу в reducer, а вторым параметром мидлвере

export default store;
