import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  detector: "MCT",
};

const detectorSlice = createSlice({
  name: "detector",
  initialState,
  reducers: {
    updateDetector: (state, { payload }) => {
      state.detector = payload;
    },
  },
});

export const { updateDetector } = detectorSlice.actions;

export default detectorSlice.reducer;
