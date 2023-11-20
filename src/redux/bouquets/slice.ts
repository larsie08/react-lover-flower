import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { fetchBouquets } from "./asyncActions";

import { Bouquet, BouquetsSliceState, Status } from "./types";

const initialState: BouquetsSliceState = {
  items: [],
  status: Status.LOADING,
};

const bouquetsSlice = createSlice({
  name: "bouquet",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBouquets.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(
      fetchBouquets.fulfilled,
      (state, action: PayloadAction<Bouquet[]>) => {
        state.items = action.payload;
        state.status = Status.SUCCESS;
      }
    );
    builder.addCase(fetchBouquets.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export default bouquetsSlice.reducer;
