import { FC, memo } from "react";
import { SummaryProps } from "../../FormTypes/form.types";

export const Summary: FC<SummaryProps> = memo(
  ({ finalPrice, discount, deliveryPrice, appliedPromo }) => (
    <div className="summary mt-16 flex flex-col gap-2">
      <div className="flex gap-24">
        <h2 className="font-bold uppercase text-light-turquoise max-lg:text-[20px] lg:text-[30px]">
          Общая сумма заказа
        </h2>
        <h2 className="font-bold uppercase text-light-turquoise max-lg:text-[20px] lg:text-[30px]">
          {finalPrice} ₽
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="font-normal uppercase max-lg:text-[12px] lg:text-[14px]">
          Скидка: {discount} ₽ ({appliedPromo?.percentageDiscount}%)
        </h3>
        <h3 className="font-normal uppercase max-lg:text-[12px] lg:text-[14px]">
          Доставка: {deliveryPrice} ₽
        </h3>
      </div>
    </div>
  ),
);
