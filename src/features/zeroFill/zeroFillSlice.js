import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  zeroFill: "0",
};

const zeroFillSlice = createSlice({
  name: "zeroFill",
  initialState,
  reducers: {
    updateZeroFill: (state, { payload }) => {
      state.zeroFill = payload;
    },
  },
});

export const { updateZeroFill } = zeroFillSlice.actions;

export default zeroFillSlice.reducer;
