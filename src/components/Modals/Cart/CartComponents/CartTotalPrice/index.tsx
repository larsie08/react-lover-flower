import { FC, memo } from "react";

type CartTotalPriceProps = {
  totalPrice: number;
  handleOrderButton: () => void;
};

export const CartTotalPrice: FC<CartTotalPriceProps> = memo(
  ({ totalPrice, handleOrderButton }) => {
    return (
      <div className="total_price_block flex flex-col lg:gap-5 max-lg:gap-2">
        <div className="total_price w-[295px]">
          <h2 className="text-[14px] text-light-turquoise font-bold tracking-[0.28px] uppercase max-lg:text-[10px] max-lg:tracking-[0.02em]">
            Предварительный итог: {totalPrice} руб.
          </h2>
          <p className="text-[14px] font-normal tracking-[0.28px] uppercase text-balance max-lg:text-[10px] max-lg:tracking-[0.02em]">
            Чтобы узнать стоимость доставки, перейдите к оформлению заказа.
          </p>
        </div>
        <button
          onClick={handleOrderButton}
          className="border-[0.5px] p-5 text-[12px] text-center font-bold tracking-[1.2px] uppercase hover:bg-light-turquoise hover:text-[black] focus:border-light-turquoise active:shadow-[0_0_10px_0_#01281F_inset]"
        >
          Оформить заказ
        </button>
      </div>
    );
  }
);
