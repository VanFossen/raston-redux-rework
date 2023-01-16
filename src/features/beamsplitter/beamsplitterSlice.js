import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  beamsplitter: "AR_ZnSe",
};

const beamsplitterSlice = createSlice({
  name: "beamsplitter",
  initialState,
  reducers: {
    updateBeamsplitter: (state, { payload }) => {
      state.beamsplitter = payload;
    },
  },
});

export const { updateBeamsplitter } = beamsplitterSlice.actions;

export default beamsplitterSlice.reducer;
