import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type User } from "../types";

interface AppState {
  apiKey: string;
  devUrl: string;
  loggedIn: boolean;
  username: string;
  password: string;
  token: string;
  user: User | null;
}

const initialState: AppState = {
  apiKey: "",
  devUrl: "http://localhost:5000/",
  loggedIn: false, // change this to false to work on the Login component
  username: "",
  password: "",
  token: "",
  user: null,
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
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
  },
});

export const {
  setApiKey,
  setLoggedIn,
  setUsername,
  setPassword,
  setToken,
  setUser,
} = appSlice.actions;
export default appSlice.reducer;
