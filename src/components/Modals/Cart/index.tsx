import { FC, useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import classNames from "classnames";

import { useAppDispatch } from "../../../redux/store";
import { selectCartState } from "../../../redux/cart/selectors";

import {
  CartBallsBlock,
  CartCardBlock,
  CartTitleBlock,
  CartTotalPrice,
} from "./CartComponents";
import { DecorativeElement } from "../..";
import { setModalState } from "../../../redux/modal/slice";
import { ModalType } from "../../../redux/modal/types";

export const Cart: FC = () => {
  const dispatch = useAppDispatch();

  const { totalPrice, items, isOpen } = useSelector(selectCartState);

  const [screenWidth, setScreenWidth] = useState(window.outerWidth);

  const closeCart = useCallback(
    () => dispatch(setModalState({ modalType: ModalType.Cart, isOpen: false })),
    [dispatch]
  );

  const handleScreenWidth = () => setScreenWidth(window.outerWidth);

  useEffect(() => {
    localStorage.setItem("flower-cart", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    window.addEventListener("resize", handleScreenWidth);

    return () => {
      window.removeEventListener("resize", handleScreenWidth);
    };
  }, []);

  useEffect(() => {
    const body = document.body;
    const header = document.getElementById("header");
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    const paddingValue = `${scrollbarWidth}px`;

    if (isOpen) {
      body.style.paddingRight = paddingValue;
      body.style.overflow = "hidden";
      if (header) header.style.paddingRight = paddingValue;
    } else {
      body.style.paddingRight = "0px";
      body.style.overflow = "visible";
      if (header) header.style.paddingRight = "0px";
    }

    return () => {
      body.style.paddingRight = "0px";
      body.style.overflow = "visible";
      if (header) header.style.paddingRight = "0px";
    };
  }, [isOpen]);

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
          "cart__wrapper absolute flex flex-col justify-between right-0 z-50 h-full lg:p-5 max-sm:py-5 max-sm:px-2 bg-[#000] transition-[width]",
          {
            ["w-[420px] max-sm:w-[260px]"]: isOpen,
            ["w-0"]: !isOpen,
          }
        )}
      >
        <div className="flex flex-col overflow-y-hidden">
          <CartTitleBlock closeCart={closeCart} screenWidth={screenWidth} />
          <div
            className={classNames("flex flex-col pr-4", {
              ["overflow-y-scroll"]:
                items.length > 5 || (screenWidth < 720 && items.length >= 4),
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
          <DecorativeElement className="lg:mt-7 mb-3 border-b-[1px] border-[#555] max-sm:mt-3" />
          <CartTotalPrice totalPrice={totalPrice} closeCart={closeCart} />
        </div>
      </div>
    </div>,
    document.getElementById("portal") as Element
  );
};
