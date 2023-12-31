import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartItem, CartSliceState } from "./types";
import { getCartFromLS } from "../../utils/getCartFromLS";
import { calcTotalPrice } from "../../utils/calcTotalPrice";

const initialState: CartSliceState = getCartFromLS();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItem(state, action: PayloadAction<CartItem>) {
      const { id, count } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.count += count;
      } else {
        state.items.push({ ...action.payload });
      }

      state.totalPrice = calcTotalPrice(state.items);
    },
    updateItemCount(
      state,
      action: PayloadAction<{ id: number; delta: number }>
    ) {
      const { id, delta } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.count += delta;
      }

      state.totalPrice = calcTotalPrice(state.items);
    },
    setDeleteBouquet(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.totalPrice = calcTotalPrice(state.items);
    },
  },
});

export const { setCartItem, setDeleteBouquet, updateItemCount } =
  cartSlice.actions;

export default cartSlice.reducer;
