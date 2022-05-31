import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import counterReducer from "./CounterSlice";

export const rootReducer = combineReducers({
  user: userReducer,
  counter: counterReducer,
});
