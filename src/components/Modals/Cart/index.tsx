import { FC, useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";

import { useAppDispatch } from "../../../redux/store";
import {
  selectCartIsOpen,
  selectCartState,
} from "../../../redux/cart/selectors";

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
  const navigate = useNavigate();

  const { totalPrice, cartItems } = useSelector(selectCartState);
  const isOpen = useSelector(selectCartIsOpen);

  const [screenWidth, setScreenWidth] = useState(window.outerWidth);

  const closeCart = useCallback(
    () => dispatch(setModalState({ modalType: ModalType.Cart, isOpen: false })),
    [dispatch]
  );

  const handleOrderButton = useCallback(() => {
    if (cartItems.length !== 0 || cartItems) {
      navigate("order");
      closeCart();
    }
  }, [dispatch, cartItems]);

  const handleScreenWidth = () => setScreenWidth(window.outerWidth);

  useEffect(() => {
    localStorage.setItem("flower-cart", JSON.stringify(cartItems));
  }, [cartItems]);

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
          "cart__wrapper absolute flex flex-col justify-between right-0 z-50 h-full lg:p-5 max-lg:py-5 max-lg:px-2 bg-[#000] transition-[width]",
          {
            ["w-[420px] max-lg:w-[260px]"]: isOpen,
            ["w-0"]: !isOpen,
          }
        )}
      >
        <div className="flex flex-col overflow-y-hidden">
          <CartTitleBlock closeCart={closeCart} screenWidth={screenWidth} />
          <div
            className={classNames("flex flex-col pr-4", {
              ["overflow-y-scroll"]:
              cartItems.length > 5 || (screenWidth < 769 && cartItems.length >= 4),
            })}
          >
            {cartItems.map((obj) => (
              <CartCardBlock
                key={obj.id}
                id={obj.id}
                name={obj.name}
                imageUrl={obj.imageUrl}
                cost={obj.cost}
                quantity={obj.quantity}
                dispatch={dispatch}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <CartBallsBlock />
          <DecorativeElement className="lg:mt-7 mb-3 border-b-[1px] border-[#555] max-lg:mt-3" />
          <CartTotalPrice
            totalPrice={totalPrice}
            handleOrderButton={handleOrderButton}
          />
        </div>
      </div>
    </div>,
    document.getElementById("portal") as Element
  );
};
