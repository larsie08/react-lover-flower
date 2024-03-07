import { RootState } from "../store";

export const selectBouquetById = (id: string) => (state: RootState) =>
  state.bouquets.items.find((item) => String(item.id) === id);
