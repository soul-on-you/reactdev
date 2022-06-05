import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import counterReducer from "./CounterSlice";
import { postAPI } from "../../service/PostService";
import { clientAPI } from "../../service/ClientService";

export const rootReducer = combineReducers({
  user: userReducer,
  counter: counterReducer,
  [postAPI.reducerPath]: postAPI.reducer,
  [clientAPI.reducerPath]: clientAPI.reducer,
});
