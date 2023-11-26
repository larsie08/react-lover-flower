import { Bouquet } from "../bouquets/types";

export interface CartSliceState {
  items: CartItem[];
}

export interface CartItem extends Bouquet {
  count: number;
}
