import { configureStore } from "@reduxjs/toolkit";
import createBoardSlice from "./createBoardSlice";
export const store = configureStore({
  reducer: {
    createBoardSlice,
  },
});
