import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  molecule: "CO",
};

const moleculeSlice = createSlice({
  name: "pressure",
  initialState,
  reducers: {
    updateMolecule: (state, { payload }) => {
      state.molecule = payload;
    },
  },
});

export const { updateMolecule } = moleculeSlice.actions;

export default moleculeSlice.reducer;
