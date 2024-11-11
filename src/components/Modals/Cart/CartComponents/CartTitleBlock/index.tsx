import { FC, memo } from "react";

import { CloseSvg } from "../../../../../assets";

type CartTitleProps = {
  closeCart: () => void;
};

export const CartTitleBlock: FC<CartTitleProps> = memo(({ closeCart }) => {
  return (
    <div className="title flex items-center justify-between border-b-[1px] w-full pb-4 border-[#555] ">
      <h1 className="text-[30px] text-light-turquoise font-bold tracking-[1.2px] uppercase">
        Ваша корзина
      </h1>
      <button onClick={closeCart}>
        <CloseSvg />
      </button>
    </div>
  );
});
