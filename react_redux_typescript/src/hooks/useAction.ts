import { bindActionCreators } from "redux";
import { useTypedDispatch } from "./useTypedDispatch";
import * as UserActions from "../store/action-creators/user";
import * as TodoActions from "../store/action-creators/todo";

export const useActions = () => {
  const dispatch = useTypedDispatch();
  return bindActionCreators({ ...TodoActions, ...UserActions }, dispatch);
};
