import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";

export const CartTotalPrice: FC = () => {
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
  return (
    <div className="total_price_block flex flex-col gap-5">
      <div className="total_price w-[295px]">
        <h2 className="text-[14px] text-light-turquoise font-bold tracking-[0.28px] uppercase">
          Предварительный итог: {totalPrice} руб.
        </h2>
        <p className="text-[14px] font-normal tracking-[0.28px] uppercase">
          Чтобы узнать стоимость доставки, перейдите к оформлению заказа.
        </p>
      </div>
      <button className="border-[0.5px] p-5 text-[12px] font-bold tracking-[1.2px] uppercase hover:bg-light-turquoise hover:text-[black] focus:border-light-turquoise active:shadow-[0_0_10px_0_#01281F_inset]">
        Оформить заказ
      </button>
    </div>
  );
};
