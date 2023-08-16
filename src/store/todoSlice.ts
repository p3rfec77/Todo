import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "./index";

export interface ITodo {
  id: string;
  text: string;
  completed: boolean;
}

interface TodoState {
  todos: ITodo[];
  text: string;
}

const initialState: TodoState = {
  todos: [],
  text: "",
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
      });
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    toggleTodoCompleted: (state, action) => {
      const toggledTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      if (!toggledTodo) {
        return;
      }

      toggledTodo.completed = !toggledTodo.completed;
    },

    setText: (state, action) => {
      state.text = action.payload;
    },
  },
});

export const { addTodo, removeTodo, toggleTodoCompleted, setText } =
  todoSlice.actions;

export const selectTodos = (state: RootState) => state.todo.todos;
export const selectText = (state: RootState) => state.todo.text;

export default todoSlice.reducer;
