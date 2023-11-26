import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Bouquet } from "../bouquets/types";
import { CartSliceState } from "./types";
import { getCartFromLS } from "../../utils/getCartFromLS";

const initialState: CartSliceState = getCartFromLS();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItem(state, action: PayloadAction<Bouquet>) {
      const { id } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
    },
    setPlus(state, action: PayloadAction<number>) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );
      if (existingItem) {
        existingItem.count++;
      }
    },

    setMinus(state, action: PayloadAction<number>) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );
      if (existingItem) {
        existingItem.count--;
      }
    },
    setDeleteBouquet(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { setCartItem, setPlus, setMinus, setDeleteBouquet } =
  cartSlice.actions;

export default cartSlice.reducer;
