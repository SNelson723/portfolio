import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type User } from "../types";

interface AppState {
  apiKey: string;
  devUrl: string;
  loggedIn: boolean;
  username: string;
  password: string;
  token: string;
  email: string;
  user: User;
  currentPage: string;
}

const initialState: AppState = {
  apiKey: "",
  devUrl: "http://localhost:5000/",
  loggedIn: false, // change this to false to work on the Login component
  username: "",
  password: "",
  token: "",
  email: "",
  user: { id: 0, email: "", username: "" },
  currentPage: "Home",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setApiKey: (state, action: PayloadAction<string>) => {
      state.apiKey = action.payload;
    },
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.loggedIn = action.payload;
    },
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<string>) => {
      state.currentPage = action.payload;
    },
  },
});

export const {
  setApiKey,
  setLoggedIn,
  setUsername,
  setPassword,
  setToken,
  setEmail,
  setUser,
  setCurrentPage,
} = appSlice.actions;
export default appSlice.reducer;
