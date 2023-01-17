import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  beamsplitter: "AR_ZnSe",
  detector: "MCT",
  molecule: "CO",
  pressure: 0.001,
  resolution: "1",
  scan: 1,
  source: "tungsten",
  waveMin: 2000,
  waveMax: 8000,
  window: "ZnSe",
  zeroFill: "0",
};

const parameterSlice = createSlice({
  name: "parameter",
  initialState,
  reducers: {
    updateBeamsplitter: (state, { payload }) => {
      state.beamsplitter = payload;
    },
    updateDetector: (state, { payload }) => {
      state.detector = payload;
    },
    updateMolecule: (state, { payload }) => {
      state.molecule = payload;
    },
    updatePressure: (state, { payload }) => {
      state.pressure = payload;
    },
    updateResolution: (state, { payload }) => {
      state.resolution = payload;
    },
    updateScan: (state, { payload }) => {
      state.scan = payload;
    },
    updateSource: (state, { payload }) => {
      state.source = payload;
    },
    updateWaveMin: (state, { payload }) => {
      state.waveMin = payload;
    },
    updateWaveMax: (state, { payload }) => {
      state.waveMax = payload;
    },
    updateWindow: (state, { payload }) => {
      state.window = payload;
    },
    updateZeroFill: (state, { payload }) => {
      state.zeroFill = payload;
    },
  },
});

export const {
  updateBeamsplitter,
  updateDetector,
  updateMolecule,
  updatePressure,
  updateResolution,
  updateScan,
  updateSource,
  updateWaveMin,
  updateWaveMax,
  updateWindow,
  updateZeroFill,
} = parameterSlice.actions;

export default parameterSlice.reducer;
