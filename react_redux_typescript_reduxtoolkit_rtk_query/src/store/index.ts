import { configureStore } from "@reduxjs/toolkit";
import { postAPI } from "../service/PostService";
import { rootReducer } from "./reducers";

export const setStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

// преимущества этого способа
// в createStore уже подключены:
// + redux-devtools-extension
// + redux-think-middleware

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setStore>;
export type AppDispatch = AppStore["dispatch"];
