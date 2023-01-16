import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pressure: 0.001,
};

const pressureSlice = createSlice({
  name: "pressure",
  initialState,
  reducers: {
    updatePressure: (state, { payload }) => {
      state.pressure = payload;
    },
  },
});

export const { updatePressure } = pressureSlice.actions;

export default pressureSlice.reducer;
