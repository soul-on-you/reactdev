import axios from "axios";
import { Dispatch } from "redux";
import {
  AddUserAction,
  DeleteUserAction,
  LoadUserAction,
  LoadUserErrorAction,
  User,
  UserAction,
  UserActionTypes,
} from "../../types/user";

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
  return async (dispatch: Dispatch<UserAction>, getState: any) => {
    try {
      dispatch(loadUserAction());

      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      dispatch(addUserAction(response.data));
    } catch (error) {
      //   dispatch(loadUserErrorAction(error));
      dispatch(loadUserErrorAction("Не удалось загрузить пользователей"));
    }
  };
};

export const loadUserErrorAction = (payload: string): LoadUserErrorAction => {
  return {
    type: UserActionTypes.LOAD_USERS_ERROR,
    payload,
  };
};
