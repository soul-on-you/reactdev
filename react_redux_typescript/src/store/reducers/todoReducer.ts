import { TodoAction, TodoActionType, TodoState } from "../../types/todo";

const defaultState: TodoState = {
  todos: [],
  loading: false,
  error: null,
};

export const todoReducer = (
  state = defaultState,
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case TodoActionType.ADD_TODO:
      if (Array.isArray(action.payload))
        return { ...state, todos: [...state.todos, ...action.payload] };
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
    default:
      return state;
  }
};
