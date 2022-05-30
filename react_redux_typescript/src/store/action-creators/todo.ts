import axios from "axios";
import { isEqualObject } from "crud-object-diff";
import { Dispatch } from "react";
import {
  AddTodoAction,
  LoadTodoAction,
  LoadTodoErrorAction,
  LoadTodoSuccessAction,
  RemoveTodoAction,
  Todo,
  TodoAction,
  TodoActionType,
} from "../../types/todo";
import { RootState } from "../reducers";

export const addTodoAction = (payload: Todo | Todo[]): AddTodoAction => {
  return {
    type: TodoActionType.ADD_TODO,
    payload,
  };
};

export const removeTodoAction = (payload: number): RemoveTodoAction => {
  return {
    type: TodoActionType.REMOVE_TODO,
    payload,
  };
};

const loadTodoAction = (): LoadTodoAction => {
  return {
    type: TodoActionType.LOAD_TODO,
  };
};

export const fetchTodoAction = () => {
  return async (dispatch: Dispatch<TodoAction>, getState: () => RootState) => {
    try {
      dispatch(loadTodoAction());
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );

      const prevTodos = getState().todo.todos;
      const newTodos = response.data.filter(
        (todo: Todo) => !prevTodos.find((t) => isEqualObject(t, todo))
      );

      if (newTodos.length > 0) dispatch(addTodoAction(newTodos));

      dispatch(loadTodoSuccessAction());
    } catch (error) {
      dispatch(loadTodoErrorAction("Не удалось загрузить задачи"));
    }
  };
};

const loadTodoSuccessAction = (): LoadTodoSuccessAction => {
  return {
    type: TodoActionType.LOAD_TODO_SUCCESS,
  };
};

const loadTodoErrorAction = (payload: string): LoadTodoErrorAction => {
  return {
    type: TodoActionType.LOAD_TODO_ERROR,
    payload,
  };
};
