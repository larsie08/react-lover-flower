import { FC, memo } from "react";
import classNames from "classnames";

import { CartSvg, PhoneButtonSvg, SocialBorderSvg } from "../../../../assets";

import { CartItem } from "../../../../redux/cart/types";
import { ModalType } from "../../../../redux/modal/types";

type SideBlockProps = {
  cartItems: CartItem[];
  openModal: (type: ModalType) => void;
};

export const CatalogRightSideBlock: FC<SideBlockProps> = memo(
  ({ openModal, cartItems }) => {
    return (
      <div className="flex flex-col justify-between">
        <div className="socials flex justify-end mt-20">
          <SocialBorderSvg />
        </div>
        <div className="footer_buttons flex flex-col items-end justify-center">
          <h3 className="phone text-[16px] relative z-20 mt-14 font-normal tracking-[1.6px] uppercase">
            +375 (29) 113-69-69
          </h3>
          <button
            onClick={() => openModal(ModalType.Modal)}
            className="call w-[180px] mt-3 flex items-center gap-2 py-2 px-4 bg-[#000]/[.20] rounded-xl backdrop-blur-[10px]"
          >
            <PhoneButtonSvg />
            <p className="text-[14px] font-normal tracking-[1.4px] uppercase text-light-turquoise">
              заказать звонок
            </p>
          </button>
          <button
            onClick={() => openModal(ModalType.Cart)}
            className="cart flex mt-5 bg-[#000]/[.20] rounded-xl backdrop-blur-[10px] p-[15px]"
          >
            <CartSvg />
            <svg
              className="absolute right-[8px] top-[10px]"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <circle cx="8" cy="8.86523" r="8" fill="#43FFD2" />
            </svg>
            <p
              className={classNames(
                "text-dark-green absolute right-[13px] top-[10px] text-standart",
                { ["right-0 left-10"]: cartItems.length >= 10 }
              )}
            >
              {cartItems.length}
            </p>
          </button>
        </div>
      </div>
    );
  }
);
