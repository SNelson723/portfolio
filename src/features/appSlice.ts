import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  apiKey: string;
  url: string;
  loggedIn: boolean;
}

const initialState: AppState = {
  apiKey: "",
  url: "",
  loggedIn: true, // change this to false to work on the Login component
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setApiKey: (state, action: PayloadAction<string>) => {
      state.apiKey = action.payload;
    },
    setUrl: (state, action: PayloadAction<string>) => {
      state.url = action.payload;
    },
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.loggedIn = action.payload;
    },
  },
});

export const { setApiKey, setUrl, setLoggedIn } = appSlice.actions;
export default appSlice.reducer;
