import { FC } from "react";
import { createPortal } from "react-dom";

import { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";

import {
  CartBallsBlock,
  CartCardBlock,
  CartTitleBlock,
  CartTotalPrice,
} from "./CartComponents";
import { DecorativeElement } from "../..";

import classNames from "classnames";

export const Cart: FC = () => {
  const isOpen = useSelector((state: RootState) => state.modal.isOpenCart);

  return createPortal(
    <div
      className={classNames("cart fixed top-0 w-full h-full z-40", {
        ["visible"]: isOpen,
        ["invisible"]: !isOpen,
      })}
    >
      <div className="w-full h-full absolute bg-[#000]/[0.20] backdrop-blur-[10px] z-40" />
      <div className="cart__wrapper absolute flex flex-col justify-between right-0 z-50 h-[100vh] w-[420px] p-5 bg-[#000]">
        <div className="flex flex-col">
          <CartTitleBlock />
          <CartCardBlock />
          <CartCardBlock />
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
