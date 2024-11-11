import { RootState } from "../store";
import { createSelector } from "@reduxjs/toolkit";

const cartItems = (state: RootState) => state.cart.items;
const cartTotalPrice = (state: RootState) => state.cart.totalPrice;
const cartIsOpen = (state: RootState) => state.modal.isOpenCart;

export const selectCartItemById = createSelector(
  [cartItems, (_state: RootState, id: number) => id],
  (items, id) => items.find((item) => item.id === id)
);

export const selectCartItems = createSelector([cartItems], (items) => items);

export const selectCartState = createSelector(
  [cartItems, cartTotalPrice, cartIsOpen],
  (items, totalPrice, isOpen) => ({ items, totalPrice, isOpen })
);
