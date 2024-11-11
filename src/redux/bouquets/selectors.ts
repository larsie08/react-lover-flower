import { RootState } from "../store";
import { createSelector } from "@reduxjs/toolkit";

const selectBouquetsItems = (state: RootState) => state.bouquets.items;
const selectBouquetsStatus = (state: RootState) => state.bouquets.status;

export const selectBouquetById = createSelector(
  [selectBouquetsItems, (_state: RootState, id?: string) => id],
  (items, id) => items.find((item) => String(item.id) === id)
);

export const selectBouquetState = createSelector(
  [selectBouquetsItems, selectBouquetsStatus],
  (items, status) => ({ items, status })
);

export const selectBouquetItems = createSelector(
  selectBouquetsItems,
  (items) => items
);
