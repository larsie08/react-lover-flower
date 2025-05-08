import { FC } from "react";
import classNames from "classnames";
import { CartSvg } from "../../../../../../assets";

type Props = {
  cartCount: number;
  onClick: () => void;
};

export const CartButton: FC<Props> = ({ cartCount, onClick }) => (
  <button
    onClick={onClick}
    className="cart relative flex mt-5 bg-black/20 rounded-xl backdrop-blur-[10px] p-[15px]"
  >
    <CartSvg />
    {cartCount > 0 && (
      <>
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
            "text-dark-green absolute text-standart top-[10px]",
            cartCount >= 10 ? "right-0 left-10" : "right-[13px]"
          )}
        >
          {cartCount}
        </p>
      </>
    )}
  </button>
);
