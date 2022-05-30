export interface User {
  id: number | string;
  name: string;
  email: string;
}

export interface UserState {
  users: User[];
  loading: boolean;
  error: null | string;
}

interface Action {
  type: UserActionTypes;
  payload?: any;
}

export type UserAction =
  | AddUserAction
  | DeleteUserAction
  | LoadUserAction
  | LoadUserSuccessAction
  | LoadUserErrorAction;

export enum UserActionTypes {
  ADD_USER = "ADD_USER",
  DELETE_USER = "DELETE_USER",
  LOAD_USERS = "LOAD_USERS",
  LOAD_USERS_SUCCESS = "LOAD_USERS_SUCCESS",
  LOAD_USERS_ERROR = "LOAD_USERS_ERROR",
}

export interface AddUserAction extends Action {
  type: UserActionTypes.ADD_USER;
  payload: User | User[];
}

export interface DeleteUserAction extends Action {
  type: UserActionTypes.DELETE_USER;
  payload: User["id"];
}

export interface LoadUserAction extends Action {
  type: UserActionTypes.LOAD_USERS;
}

export interface LoadUserSuccessAction extends Action {
  type: UserActionTypes.LOAD_USERS_SUCCESS;
}

export interface LoadUserErrorAction extends Action {
  type: UserActionTypes.LOAD_USERS_ERROR;
  payload: string;
}
