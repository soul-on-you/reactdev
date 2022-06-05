import { configureStore } from "@reduxjs/toolkit";
import { clientAPI } from "../service/ClientService";
import { postAPI } from "../service/PostService";
import { rootReducer } from "./reducers";

export const setStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getdefaultMiddleware) =>
      getdefaultMiddleware()
        .concat(postAPI.middleware)
        .concat(clientAPI.middleware),
  });
};

// преимущества этого способа
// в createStore уже подключены:
// + redux-devtools-extension
// + redux-think-middleware

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setStore>;
export type AppDispatch = AppStore["dispatch"];
