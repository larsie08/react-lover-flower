import { Bouquet } from "../bouquets/types";

export interface CartSliceState {
  items: CartItem[];
  totalPrice: number;
}

export interface CartItem extends Bouquet {
  count: number;
}
