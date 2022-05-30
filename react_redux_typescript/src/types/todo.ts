export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface TodoState {
  todos: Todo[];
  loading: boolean;
  error: null | string;
}

export enum TodoActionType {
  ADD_TODO = "ADD_TODO",
  REMOVE_TODO = "REMOVE_TODO",
  LOAD_TODO = "LOAD_TODO",
  LOAD_TODO_SUCCESS = "LOAD_TODO_SUCCESS",
  LOAD_TODO_ERROR = "LOAD_TODO_ERROR",
}

interface Action {
  type: TodoActionType;
  payload?: any;
}

export interface AddTodoAction extends Action {
  type: TodoActionType.ADD_TODO;
  payload: Todo | Todo[];
}

export interface RemoveTodoAction extends Action {
  type: TodoActionType.REMOVE_TODO;
  payload: Todo["id"];
}

export interface LoadTodoAction extends Action {
  type: TodoActionType.LOAD_TODO;
}

export interface LoadTodoSuccessAction extends Action {
  type: TodoActionType.LOAD_TODO_SUCCESS;
}

export interface LoadTodoErrorAction extends Action {
  type: TodoActionType.LOAD_TODO_ERROR;
  payload: string;
}

export type TodoAction =
  | AddTodoAction
  | RemoveTodoAction
  | LoadTodoAction
  | LoadTodoSuccessAction
  | LoadTodoErrorAction;
