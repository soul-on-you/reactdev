import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootWatcher } from "../saga";
// import { cashWatcher } from "../saga/cashSaga";
// import { customersWatcher } from "../saga/customersSaga";
import cashReducer from "./cashReducer";
import customerReducer from "./customerReducer";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  cash: cashReducer,
  customers: customerReducer,
});

const store = legacy_createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

// sagaMiddleware.run(cashWatcher);
// sagaMiddleware.run(customersWatcher);

sagaMiddleware.run(rootWatcher);

export default store;
