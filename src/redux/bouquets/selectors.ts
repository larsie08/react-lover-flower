import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const bouquets = (state: RootState) => state.bouquets.items;
export const selectBouquetsState = (state: RootState) => state.bouquets;

export const selectBouquetById = createSelector(
  [bouquets, (_state: RootState, id: number) => id],
  (bouquets, id) => bouquets.find((item) => item.id === id)
);
