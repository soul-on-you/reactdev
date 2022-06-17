import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import authReducer from "./slices/AuthSlice";
import { authAPI } from "../api/authApi";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    [authAPI.reducerPath]: authAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authAPI.middleware),
  devTools: true,
});
