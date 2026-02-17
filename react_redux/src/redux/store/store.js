import { configureStore } from "@reduxjs/toolkit";
import counterSliceReducer from "./features/counterSlice.js";

export const store = configureStore({
  reducer: {
    counter: counterSliceReducer,
  },
});
