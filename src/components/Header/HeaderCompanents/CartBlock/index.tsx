import { FC } from "react";
import { CartSvg, PhoneSvg } from "../../../../assets";

export const CartBlock: FC = () => {
  return (
    <div className="cart_block flex items-center gap-8">
      <div className="cart_block__phone flex items-center gap-3">
        <PhoneSvg />
        <p className="text-[14px] text-light-turquoise font-normal tracking-[1.4px] uppercase">
          +375 (29) 113-69-69
        </p>
      </div>
      <button className="cart flex relative bg-[#000]/[.20] rounded-xl backdrop-blur-[10px]">
        <CartSvg />
        <svg
          className="absolute -right-[8px] -top-[3px]"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
        >
          <circle cx="8" cy="8.86523" r="8" fill="#43FFD2" />
        </svg>
        <p className="text-dark-green absolute -right-[3px] -top-[3px] text-standart">
          5
        </p>
      </button>
    </div>
  );
};
