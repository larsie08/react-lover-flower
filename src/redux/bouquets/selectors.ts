import { RootState } from "../store";

export const selectBouquetById = (id: number) => (state: RootState) =>
  state.bouquets.items.find((item) => item.id === id);
