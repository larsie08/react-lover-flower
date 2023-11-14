import { FC } from "react";

import { useAppDispatch } from "../../../../../redux/store";
import { setIsOpenCart } from "../../../../../redux/modal/slice";
import { CloseSvg } from "../../../../../assets";

export const CartTitleBlock: FC = () => {
  const dispatch = useAppDispatch();

  const closeButton = () => {
    dispatch(setIsOpenCart(false));
  };

  return (
    <div className="title flex items-center justify-between border-b-[1px] w-full pb-4 border-[#555] ">
      <h1 className="text-[30px] text-light-turquoise font-bold tracking-[1.2px] uppercase">
        Ваша корзина
      </h1>
      <button onClick={closeButton}>
        <CloseSvg />
      </button>
    </div>
  );
};
