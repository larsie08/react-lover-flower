import { configureStore } from "@reduxjs/toolkit";
import modal from "./modal/slice";
import header from "./header/slice";
import filter from "./filter/slice";
import bouquets from "./bouquets/slice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: { modal, header, filter, bouquets },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
