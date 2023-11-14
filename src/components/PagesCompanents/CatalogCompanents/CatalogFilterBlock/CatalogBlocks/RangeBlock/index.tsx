import { FC } from "react";

export const RangeBlock: FC = () => {
  return (
    <div className="range_block flex flex-col gap-2">
      <h2 className="text-[14px] text-light-turquoise font-bold tracking-[0.56px] uppercase">
        стоимость
      </h2>
      <div className="flex flex-col gap-2">
        <input id="range" className="border-t-[1px]" type="range" />
        <label className="text-[12px] font-light tracking-[0.48px] uppercase" htmlFor="range">Цена: 50.00 ₽ – 400.00 ₽</label>
      </div>
    </div>
  );
};
