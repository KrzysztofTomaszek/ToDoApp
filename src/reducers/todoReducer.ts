import { ADD_TODO, REMOVE_TODO, UPDATE_TODO, TOGGLE_CHECK } from "../constans/actionTypes";
import { AnyAction } from "react-redux";
import { addTodo, updateTodo, removeTodo } from "../actions";

type Action = ReturnType<typeof addTodo> | ReturnType<typeof updateTodo> | ReturnType<typeof removeTodo>;

export interface TodoItem {
  id: Symbol;
  title: string;
  description: string;
  checked: boolean;
}

export interface TodoArray {
  todoArray: Array<TodoItem>;
}

const initialState: TodoArray = {todoArray: []};

function todoReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todoArray: [...state.todoArray, action.data] };   

    case UPDATE_TODO:
      const updatedTodos = state.todoArray.map((item: TodoItem, index: number) => {
        if (item.id === action.data.id) {
          item.title = action.data.title;
          item.description = action.data.description;
        }
        return item;
      });
      return { ...state, todoArray: updatedTodos };

    case REMOVE_TODO:
        const filteredItem = state.todoArray.filter((item: TodoItem, index: number) => {
          return item.id !== action.data.id;
        });
        return { ...state, todoArray: filteredItem };

    case TOGGLE_CHECK:
      const markedItem = state.todoArray.map((item: TodoItem, index: number) => {
        if (item.id === action.data.id) {
          item.checked = !item.checked;
        }
        return item;
      });
      return { ...state, markedItem };

    default:
      return state;
  }
}

export type TodoReducer = ReturnType<typeof todoReducer>;
export default todoReducer;
