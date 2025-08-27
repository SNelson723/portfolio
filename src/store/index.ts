import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../features/appSlice";
import todoReducer from "../features/todoSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    todo: todoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
