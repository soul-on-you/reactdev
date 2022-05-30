import { UserAction, UserActionTypes, UserState } from "../../types/user";

const defaultState: UserState = {
  users: [],
  loading: false,
  error: null,
};

// const ADD_USER = "ADD_USER";
// const DELETE_USER = "DELETE_USER";
// const LOAD_USERS = "LOAD_USERS";
// const LOAD_USERS_ERROR = "LOAD_USERS_ERROR";

export const userReducer = (
  state = defaultState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionTypes.ADD_USER:
      if (Array.isArray(action.payload))
        return {
          ...state,
          users: [...state.users, ...action.payload],
          loading: false,
        };
      return { ...state, users: [...state.users, action.payload] };
    case UserActionTypes.DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    case UserActionTypes.LOAD_USERS:
      return { ...state, loading: true, error: null };
    case UserActionTypes.LOAD_USERS_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
