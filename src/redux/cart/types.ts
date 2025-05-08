import { Bouquet } from "../bouquets/types";

export interface CartSliceState {
  cartItems: CartItem[];
  totalPrice: number;
}

export interface CartItem extends Bouquet {
  quantity: number;
}
