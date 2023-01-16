import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  window: "ZnSe",
};

const windowSlice = createSlice({
  name: "window",
  initialState,
  reducers: {
    updateWindow: (state, { payload }) => {
      state.window = payload;
    },
  },
});

export const { updateWindow } = windowSlice.actions;

export default windowSlice.reducer;
