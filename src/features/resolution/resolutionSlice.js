import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resolution: "1",
};

const resolutionSlice = createSlice({
  name: "resolution",
  initialState,
  reducers: {
    updateResolution: (state, { payload }) => {
      state.resolution = payload;
    },
  },
});

export const { updateResolution } = resolutionSlice.actions;

export default resolutionSlice.reducer;
