import { FC, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import classNames from "classnames";

import { useAppDispatch } from "../../../redux/store";
import { setIsOpenCart } from "../../../redux/modal/slice";
import { selectCartState } from "../../../redux/cart/selectors";

import {
  CartBallsBlock,
  CartCardBlock,
  CartTitleBlock,
  CartTotalPrice,
} from "./CartComponents";
import { DecorativeElement } from "../..";

import { setPadding } from "../../../utils/setPadding";

export const Cart: FC = () => {
  const dispatch = useAppDispatch();

  const { totalPrice, items, isOpen } = useSelector(selectCartState);

  useEffect(() => {
    localStorage.setItem("flower-cart", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    setPadding(isOpen);
  }, [isOpen]);

  const closeCart = useCallback(
    () => dispatch(setIsOpenCart(false)),
    [dispatch]
  );

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
          <CartTitleBlock closeCart={closeCart} />
          <div
            className={classNames("flex flex-col pr-4", {
              ["overflow-y-scroll"]: items.length > 5,
            })}
          >
            {items.map((obj) => (
              <CartCardBlock
                key={obj.id}
                id={obj.id}
                name={obj.name}
                imageUrl={obj.imageUrl}
                cost={obj.cost}
                count={obj.count}
                dispatch={dispatch}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <CartBallsBlock />
          <DecorativeElement className="mt-7 mb-3 border-b-[1px] border-[#555]" />
          <CartTotalPrice totalPrice={totalPrice} closeCart={closeCart} />
        </div>
      </div>
    </div>,
    document.getElementById("portal") as Element
  );
};
