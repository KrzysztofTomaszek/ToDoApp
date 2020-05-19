import { ADD_TODO, REMOVE_TODO, UPDATE_TODO, TOGGLE_CHECK } from "../constans/actionTypes";
import { TodoItem} from "../reducers/todoReducer";

export function addTodo(data: TodoItem) {
  return {
    type: ADD_TODO,
    data,
  };
}

export function updateTodo(data: Partial<TodoItem>) {
  return {
    type: UPDATE_TODO,
    data,
  };
}

export function toggleCheck(data: Partial<TodoItem>) {
  return {
    type: TOGGLE_CHECK,
    data,
  };
}

export function removeTodo(data: Partial<TodoItem>) {
  return {
    type: REMOVE_TODO,
    data,
  };
}