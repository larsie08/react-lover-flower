import { CartItem } from "../redux/cart/types";
import { calcTotalPrice } from "./calcTotalPrice";

export const getCartFromLS = () => {
  const data = localStorage.getItem("flower-cart");
  const items = data ? JSON.parse(data) : [];
  const totalPrice = calcTotalPrice(items)

  return {
    cartItems: items as CartItem[],
    totalPrice,
  };
};
