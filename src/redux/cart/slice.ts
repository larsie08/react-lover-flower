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
      const { id, quantity } = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.cartItems.push({ ...action.payload });
      }

      state.totalPrice = calcTotalPrice(state.cartItems);
    },
    updateItemCount(
      state,
      action: PayloadAction<{ id: number; delta: number }>
    ) {
      const { id, delta } = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += delta;
      }

      state.totalPrice = calcTotalPrice(state.cartItems);
    },
    setDeleteBouquet(state, action: PayloadAction<number>) {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
      state.totalPrice = calcTotalPrice(state.cartItems);
    },
  },
});

export const { setCartItem, setDeleteBouquet, updateItemCount } =
  cartSlice.actions;

export default cartSlice.reducer;
