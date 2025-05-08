import { RootState } from "../store";
import { createSelector } from "@reduxjs/toolkit";

const cartItems = (state: RootState) => state.cart.cartItems;
export const selectCartIsOpen = (state: RootState) => state.modal.isOpenCart;
export const selectCartState = (state: RootState) => state.cart;

export const selectCartItemById = createSelector(
  [cartItems, (_state: RootState, id: number) => id],
  (items, id) => items.find((item) => item.id === id)
);