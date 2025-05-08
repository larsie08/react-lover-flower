import { FC, memo } from "react";
import { SummaryProps } from "../../FormTypes/form.types";

export const Summary: FC<SummaryProps> = memo(
  ({ finalPrice, discount, deliveryPrice, appliedPromo }) => (
    <div className="summary flex flex-col gap-2 mt-16">
      <div className="flex gap-24">
        <h2 className="text-[30px] text-light-turquoise font-bold uppercase">
          Общая сумма заказа
        </h2>
        <h2 className="text-[30px] text-light-turquoise font-bold uppercase">
          {finalPrice} ₽
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-[14px] font-normal uppercase">
          Скидка: {discount} ₽ ({appliedPromo?.percentageDiscount}%)
        </h3>
        <h3 className="text-[14px] font-normal uppercase">
          Доставка: {deliveryPrice} ₽
        </h3>
      </div>
    </div>
  )
);
