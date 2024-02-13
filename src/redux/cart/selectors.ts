import { RootState } from "../store";

export const selectCartItemById = (id: number) => (state: RootState) =>
  state.cart.items.find((item) => item.id === id);
