import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface HeaderSliceState {
  lastScrollY: number;
}

const initialState: HeaderSliceState = {
  lastScrollY: 0,
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setLastScrollY(state, action: PayloadAction<number>) {
      state.lastScrollY = action.payload;
    },
  },
});

export const { setLastScrollY } = headerSlice.actions;

export default headerSlice.reducer;
