import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  minWave: 400,
  maxWave: 12500,
};

const wavenumberSlice = createSlice({
  name: "wavenumber",
  initialState,
  reducers: {
    updateMin: (state, { payload }) => {
      state.minWave = payload;
    },
    updateMax: (state, { payload }) => {
      state.maxWave = payload;
    },
  },
});

export const { updateMin, updateMax } = wavenumberSlice.actions;

export default wavenumberSlice.reducer;
