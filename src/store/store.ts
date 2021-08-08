import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import navSlice from "./slices/navSlice";

export const store = configureStore({
  reducer: {
    nav: navSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
