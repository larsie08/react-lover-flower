import { RootState } from "../store";

export const selectMinPrice = (state: RootState) =>
  state.bouquets.items.reduce((minValue, item) => {
    return Math.min(minValue, item.cost);
  }, Infinity);

export const selectMaxPrice = (state: RootState) =>
  state.bouquets.items.reduce((maxValue, item) => {
    return Math.max(maxValue, item.cost);
  }, 0);

export const selectValueByFilter = (id: string) => (state: RootState) =>
  state.bouquets.items;
