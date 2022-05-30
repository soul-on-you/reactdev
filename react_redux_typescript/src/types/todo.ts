export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface TodoState {
  todos: Todo[];
  loading: boolean;
  error: null | string;
  page: number;
  pageCount: number | null;
  limit: number;
}

export enum TodoActionType {
  ADD_TODO = "ADD_TODO",
  REMOVE_TODO = "REMOVE_TODO",

  LOAD_TODO = "LOAD_TODO",
  LOAD_TODO_SUCCESS = "LOAD_TODO_SUCCESS",
  LOAD_TODO_ERROR = "LOAD_TODO_ERROR",

  CHANGE_PAGE_TODO = "CHANGE_PAGE_TODO",
  SET_PAGECOUNT_TODO = "SET_PAGECOUNT_TODO",
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

export interface ChangeTodoPageAction extends Action {
  type: TodoActionType.CHANGE_PAGE_TODO;
  payload: number;
}

export interface SetTodoPageCountAction extends Action {
  type: TodoActionType.SET_PAGECOUNT_TODO;
  payload: number;
}

export type TodoAction =
  | AddTodoAction
  | RemoveTodoAction
  | LoadTodoAction
  | LoadTodoSuccessAction
  | LoadTodoErrorAction
  | ChangeTodoPageAction
  | SetTodoPageCountAction;
