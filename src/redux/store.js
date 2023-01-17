import { configureStore } from "@reduxjs/toolkit";

// reducers
import parameterReducer from "../features/parameter/parameterSlice";

export const store = configureStore({
  reducer: {
    parameter: parameterReducer,
  },
});
