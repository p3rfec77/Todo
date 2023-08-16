import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

import { RootState } from "./index";

import { ITodo } from "../components/TodoItem/TodoItem.component";

interface TodoState {
  todos: ITodo[];
  filter: string;
  text: string;
  loading: boolean;
  error: string | undefined;
}

const initialState: TodoState = {
  todos: [],
  filter: "all",
  text: "",
  loading: false,
  error: undefined,
};

export const fetchTodos = createAsyncThunk<
  ITodo[],
  undefined,
  { rejectValue: string }
>("todos/fetchTodos", async function (_, { rejectWithValue }) {
  const LIMIT = 5;
  try {
    const respone = await fetch(
      `https://jsonplaceholder.typicode.com/users/1/todos?_limit=${LIMIT}`
    );

    if (!respone.ok) {
      throw new Error();
    }
    const data = await respone.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.name);
    }
  }
});

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({
        id: new Date().toISOString(),
        title: action.payload,
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
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.loading = false;
      state.todos = action.payload;
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.error = action.payload;
    });
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
export const selectLoading = (state: RootState) => state.todo.loading;
export const selectError = (state: RootState) => state.todo.error;

export default todoSlice.reducer;
