import { CartItem } from "../redux/cart/types";

export const calcTotalPrice = (items: CartItem[]) => {
  return items.reduce((sum, obj) => {
    return obj.cost * obj.count + sum;
  }, 0);
};
