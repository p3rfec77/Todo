import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "./index";

import { ITodo } from "../components/TodoItem/TodoItem.component";

interface TodoState {
  todos: ITodo[];
  filter: string;
  text: string;
}

const initialState: TodoState = {
  todos: [],
  filter: "all",
  text: "",
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload,
        completed: false,
      });
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTodoCompleted: (state, action: PayloadAction<string>) => {
      const toggledTodo = state.todos.find(
        (todo) => todo.id === action.payload
      );
      if (!toggledTodo) {
        return;
      }

      toggledTodo.completed = !toggledTodo.completed;
    },

    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },

    FilterTodos: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
  },
});

export const {
  addTodo,
  removeTodo,
  toggleTodoCompleted,
  setText,
  FilterTodos,
} = todoSlice.actions;

export const selectTodos = (state: RootState) => state.todo.todos;
export const selectText = (state: RootState) => state.todo.text;
export const selectFilter = (state: RootState) => state.todo.filter;

export default todoSlice.reducer;
