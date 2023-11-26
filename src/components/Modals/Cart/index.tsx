import { FC } from "react";
import { createPortal } from "react-dom";

import { RootState, useAppDispatch } from "../../../redux/store";
import { useSelector } from "react-redux";
import { setDeleteBouquet, setMinus, setPlus } from "../../../redux/cart/slice";

import {
  CartBallsBlock,
  CartCardBlock,
  CartTitleBlock,
  CartTotalPrice,
} from "./CartComponents";
import { DecorativeElement } from "../..";

import classNames from "classnames";

export const Cart: FC = () => {
  const dispatch = useAppDispatch();
  const isOpen = useSelector((state: RootState) => state.modal.isOpenCart);
  const cart = useSelector((state: RootState) => state.cart.items);

  const handleAddToCart = (id: number) => dispatch(setPlus(id));
  const handleMinus = (id: number) => dispatch(setMinus(id));
  const handleDeleteItem = (id: number) => dispatch(setDeleteBouquet(id));

  return createPortal(
    <div
      className={classNames("cart fixed top-0 w-full h-full z-40", {
        ["visible"]: isOpen,
        ["invisible"]: !isOpen,
      })}
    >
      <div className="w-full h-full absolute bg-[#000]/[0.20] backdrop-blur-[10px] z-40" />
      <div className="cart__wrapper absolute flex flex-col justify-between right-0 z-50 h-[100vh] w-[420px] p-5 bg-[#000]">
        <div className="flex flex-col overflow-auto">
          <CartTitleBlock />
          <div
            className={classNames("flex flex-col", {
              ["overflow-y-scroll"]: cart.length > 5,
            })}
          >
            {cart.map((obj) => (
              <CartCardBlock
                key={obj.id}
                id={obj.id}
                name={obj.name}
                imageUrl={obj.imageUrl}
                cost={obj.cost}
                count={obj.count}
                handleAddToCart={handleAddToCart}
                handleMinus={handleMinus}
                handleDeleteItem={handleDeleteItem}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <CartBallsBlock />
          <DecorativeElement className="mt-7 mb-3 border-b-[1px] border-[#555]" />
          <CartTotalPrice />
        </div>
      </div>
    </div>,
    document.getElementById("portal") as Element
  );
};
