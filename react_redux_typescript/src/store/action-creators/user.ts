import axios from "axios";
import { isEqualObject } from "crud-object-diff";
import { Dispatch } from "redux";
import {
  AddUserAction,
  DeleteUserAction,
  LoadUserAction,
  LoadUserErrorAction,
  LoadUserSuccessAction,
  User,
  UserAction,
  UserActionTypes,
} from "../../types/user";
import { RootState } from "../reducers";

export const addUserAction = (payload: User | User[]): AddUserAction => {
  return {
    type: UserActionTypes.ADD_USER,
    payload,
  };
};

export const deleteUserAction = (payload: User["id"]): DeleteUserAction => {
  return {
    type: UserActionTypes.DELETE_USER,
    payload,
  };
};

const loadUserAction = (): LoadUserAction => {
  return { type: UserActionTypes.LOAD_USERS };
};

export const fetchUserAction = () => {
  return async (dispatch: Dispatch<UserAction>, getState: () => RootState) => {
    try {
      dispatch(loadUserAction());

      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      const prevUsers = getState().user.users;
      const newUsers = response.data.filter(
        (user: User) => !prevUsers.find((u) => isEqualObject(u, user))
      );

      if (newUsers.length > 0) dispatch(addUserAction(newUsers));

      dispatch(loadUserSuccessAction());
    } catch (error) {
      //   dispatch(loadUserErrorAction(error));
      dispatch(loadUserErrorAction("Не удалось загрузить пользователей"));
    }
  };
};

const loadUserSuccessAction = (): LoadUserSuccessAction => {
  return {
    type: UserActionTypes.LOAD_USERS_SUCCESS,
  };
};

const loadUserErrorAction = (payload: string): LoadUserErrorAction => {
  return {
    type: UserActionTypes.LOAD_USERS_ERROR,
    payload,
  };
};
