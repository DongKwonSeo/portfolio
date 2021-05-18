import { configureStore } from "@reduxjs/toolkit";
import testReducer from "./testSlice.js";

export const store = configureStore({
  reducer: {
    test: testReducer,
  },
});
