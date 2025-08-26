import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  apiKey: string;
  url: string;
}

const initialState: AppState = {
  apiKey: "",
  url: "",
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
  },
});

export const { setApiKey, setUrl } = appSlice.actions;
export default appSlice.reducer;
