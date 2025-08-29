import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Todo } from "../types";

interface TodoState {
  dummyUrl: string;
  url: string;
  todos: Todo[];
  refresh: boolean;
}

const initialState: TodoState = {
  dummyUrl: "https://dummyjson.com/todos",
  url: "",
  todos: [],
  refresh: false,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodos: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload;
    },
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos.filter((t) => t.id !== action.payload);
    },
    modifyTodo: (
      state,
      action: PayloadAction<{ id: number; todo: string }>
    ) => {
      state.todos.map((t) =>
        t.id === action.payload.id ? { ...t, todo: action.payload.todo } : t
      );
    },
    setRefresh: (state) => {
      state.refresh = !state.refresh;
    },
  },
});

export const { setTodos, addTodo, deleteTodo, modifyTodo, setRefresh } =
  todoSlice.actions;
export default todoSlice.reducer;
