import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  apiKey: string;
  devUrl: string;
  loggedIn: boolean;
  username: string;
  password: string;
}

const initialState: AppState = {
  apiKey: "",
  devUrl: "http://localhost:5000/",
  loggedIn: false, // change this to false to work on the Login component
  username: "",
  password: "",
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
  },
});

export const { setApiKey, setLoggedIn, setUsername, setPassword } =
  appSlice.actions;
export default appSlice.reducer;
