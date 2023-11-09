import { configureStore } from "@reduxjs/toolkit";
import modal from "./modal/slice";
import header from "./header/slice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: { modal, header },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
