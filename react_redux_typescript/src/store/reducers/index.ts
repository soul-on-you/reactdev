import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";
import { userReducer } from "./userReducer";

export const reducer = combineReducers({ user: userReducer, todo: todoReducer });

export type RootState = ReturnType<typeof reducer>;
