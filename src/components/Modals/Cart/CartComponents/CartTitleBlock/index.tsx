import { FC, memo } from "react";

import { CloseAdaptiveSvg, CloseSvg } from "../../../../../assets";

type CartTitleProps = {
  closeCart: () => void;
  screenWidth: number;
};

export const CartTitleBlock: FC<CartTitleProps> = memo(
  ({ closeCart, screenWidth }) => {
    return (
      <div className="title flex items-center justify-between border-b-[1px] w-full pb-4 border-[#555] ">
        <h1 className="text-[30px] text-light-turquoise font-bold tracking-[1.2px] uppercase max-sm:text-[14px] max-sm:tracking-[0.04em]">
          Ваша корзина
        </h1>
        <button onClick={closeCart}>
          {screenWidth > 640 ? <CloseSvg /> : <CloseAdaptiveSvg />}
        </button>
      </div>
    );
  }
);
