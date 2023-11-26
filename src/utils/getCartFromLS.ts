import { CartItem } from "../redux/cart/types";

export const getCartFromLS = () => {
  const data = localStorage.getItem("flower-cart");
  const items = data ? JSON.parse(data) : [];

  return {
    items: items as CartItem[],
  };
};
