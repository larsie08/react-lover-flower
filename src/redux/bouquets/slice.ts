import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { fetchBouquets } from "./asyncActions";

import {
  Bouquet,
  BouquetsSliceState,
  Status,
  UpdateBouquetProps,
} from "./types";

const initialState: BouquetsSliceState = {
  items: [],
  status: Status.LOADING,
};

const bouquetsSlice = createSlice({
  name: "bouquet",
  initialState,
  reducers: {
    updateBouquet(state, action: PayloadAction<UpdateBouquetProps>) {
      const { id, review } = action.payload;

      const bouquet = state.items.find((item) => item.id === id);
      if (!bouquet) return;

      if (Array.isArray(bouquet.reviews)) bouquet.reviews?.push(review);
      else bouquet.reviews = [review];
    },
  },
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

export const { updateBouquet } = bouquetsSlice.actions;

export default bouquetsSlice.reducer;
