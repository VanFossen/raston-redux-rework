import { configureStore } from "@reduxjs/toolkit";

// reducers
import parameterReducer from "../features/parameter/parameterSlice";
import progressReducer from "../features/progress/progressSlice";

export const store = configureStore({
  reducer: {
    parameter: parameterReducer,
    progress: progressReducer,
  },
});
