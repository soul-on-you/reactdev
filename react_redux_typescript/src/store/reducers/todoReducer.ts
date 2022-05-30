import { TodoAction, TodoActionType, TodoState } from "../../types/todo";

const defaultState: TodoState = {
  todos: [],
  loading: false,
  error: null,
  page: 1,
  pageCount: null,
  limit: 10,
};

export const todoReducer = (
  state: TodoState = defaultState,
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case TodoActionType.ADD_TODO:
      if (Array.isArray(action.payload))
        return { ...state, todos: [ ...action.payload] };
      return { ...state, todos: [...state.todos, action.payload] };
    case TodoActionType.REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((t) => t.id !== action.payload),
      };
    case TodoActionType.LOAD_TODO:
      return { ...state, loading: true, error: null };
    case TodoActionType.LOAD_TODO_SUCCESS:
      return { ...state, loading: false };
    case TodoActionType.LOAD_TODO_ERROR:
      return { ...state, loading: false, error: action.payload };
    case TodoActionType.CHANGE_PAGE_TODO:
      return { ...state, page: action.payload };
    case TodoActionType.SET_PAGECOUNT_TODO:
      return { ...state, pageCount: action.payload };
    default:
      return state;
  }
};
