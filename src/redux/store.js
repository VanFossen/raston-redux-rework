import { configureStore } from "@reduxjs/toolkit";

// reducers
import beamsplitterReducer from "../features/beamsplitter/beamsplitterSlice";
import detectorReducer from "../features/detector/detectorSlice";
import moleculeReducer from "../features/molecule/moleculeSlice";
import pressureReducer from "../features/pressure/pressureSlice";
import resolutionReducer from "../features/resolution/resolutionSlice";
import scanReducer from "../features/scan/scanSlice";
import sourceReducer from "../features/source/sourceSlice";
import wavenumberReducer from "../features/wavenumber/wavenumberSlice";
import windowReducer from "../features/window/windowSlice";
import zeroFillReducer from "../features/zeroFill/zeroFillSlice";

export const store = configureStore({
  reducer: {
    beamsplitter: beamsplitterReducer,
    detector: detectorReducer,
    molecule: moleculeReducer,
    pressure: pressureReducer,
    resolution: resolutionReducer,
    scan: scanReducer,
    source: sourceReducer,
    wavenumber: wavenumberReducer,
    window: windowReducer,
    zeroFill: zeroFillReducer,
  },
});
