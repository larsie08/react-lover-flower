import { FC, useEffect } from "react";
import { createPortal } from "react-dom";

import { RootState, useAppDispatch } from "../../../redux/store";
import { useSelector } from "react-redux";
import { setDeleteBouquet, updateItemCount } from "../../../redux/cart/slice";
import { setIsOpenCart } from "../../../redux/modal/slice";

import {
  CartBallsBlock,
  CartCardBlock,
  CartTitleBlock,
  CartTotalPrice,
} from "./CartComponents";
import { DecorativeElement } from "../..";

import classNames from "classnames";
import { setPadding } from "../../../utils/setPadding";

export const Cart: FC = () => {
  const dispatch = useAppDispatch();
  const isOpen = useSelector((state: RootState) => state.modal.isOpenCart);
  const cart = useSelector((state: RootState) => state.cart.items);

  const increaseDelta = 1;
  const decreaseDelta = -1;

  useEffect(() => {
    const json = JSON.stringify(cart);
    localStorage.setItem("flower-cart", json);
  }, [cart]);

  useEffect(() => {
    setPadding(isOpen);
  }, [isOpen]);

  const handleAddToCart = (id: number) =>
    dispatch(updateItemCount({ id, delta: increaseDelta }));
  const handleMinus = (id: number) =>
    dispatch(updateItemCount({ id, delta: decreaseDelta }));

  const handleDeleteItem = (id: number) => dispatch(setDeleteBouquet(id));

  const closeCart = () => dispatch(setIsOpenCart(false));

  return createPortal(
    <div
      className={classNames("cart fixed top-0 w-full h-full z-40 delay-75", {
        ["invisible"]: !isOpen,
        ["visible"]: isOpen,
      })}
    >
      <div
        onClick={closeCart}
        className={classNames(
          "w-full h-full absolute bg-[#000]/[0.20] backdrop-blur-[10px] z-40 transition-opacity ease-in-out duration-300",
          { ["opacity-100"]: isOpen, ["opacity-0"]: !isOpen }
        )}
      />
      <div
        className={classNames(
          "cart__wrapper absolute flex flex-col justify-between right-0 z-50 h-[100vh] p-5 bg-[#000] transition-[width]",
          {
            ["w-[420px]"]: isOpen,
            ["w-0"]: !isOpen,
          }
        )}
      >
        <div className="flex flex-col overflow-y-hidden">
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
