import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type Todo = {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
};

interface TodoState {
  dummyUrl: string;
  url: string;
  userId: number;
  todos: Todo[];
}

const initialState: TodoState = {
  dummyUrl: "https://dummyjson.com/todos",
  url: "",
  userId: 1,
  todos: [],
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
  },
});

export const { setTodos, addTodo, deleteTodo, modifyTodo } = todoSlice.actions;
export default todoSlice.reducer;
