import { applyMiddleware, legacy_createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { reducer } from "./reducers";

export const store = legacy_createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type AppDispatch = typeof store.dispatch;

// import { configureStore } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
// import { userReducer } from "./reducers/userReducer";

// export const store = configureStore({
//   reducer: {
//     user: userReducer,
//   },
//   middleware: [thunk],
// });

// export type AppDispatch = typeof store.dispatch;