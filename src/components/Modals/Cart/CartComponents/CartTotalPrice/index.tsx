import { FC } from "react";
import { Link } from "react-router-dom";

interface CartTotalPriceProps {
  totalPrice: number;
  closeCart: () => void;
}

export const CartTotalPrice: FC<CartTotalPriceProps> = ({
  totalPrice,
  closeCart,
}) => {
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
      <Link
        to="order"
        onClick={closeCart}
        className="border-[0.5px] p-5 text-[12px] text-center font-bold tracking-[1.2px] uppercase hover:bg-light-turquoise hover:text-[black] focus:border-light-turquoise active:shadow-[0_0_10px_0_#01281F_inset]"
      >
        Оформить заказ
      </Link>
    </div>
  );
};
