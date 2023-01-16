import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  scan: 1,
};

const scanSlice = createSlice({
  name: "scan",
  initialState,
  reducers: {
    updateScan: (state, { payload }) => {
      state.scan = payload;
    },
  },
});

export const { updateScan } = scanSlice.actions;

export default scanSlice.reducer;
