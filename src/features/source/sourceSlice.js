import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  source: "tungsten",
};

const sourceSlice = createSlice({
  name: "source",
  initialState,
  reducers: {
    updateSource: (state, { payload }) => {
      state.source = payload;
    },
  },
});

export const { updateSource } = sourceSlice.actions;

export default sourceSlice.reducer;
