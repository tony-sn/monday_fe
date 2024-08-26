import { configureStore } from "@reduxjs/toolkit";
import createBoardSlice from "./createBoardSlice";
export const store = configureStore({
  reducer: {
    createBoardSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
