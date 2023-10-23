import { FC } from "react";

export const InfoBlock: FC = () => {
  return (
    <div className="flex flex-col gap-5 mt-5">
      <div className="flex flex-col gap-1.5 items-end">
        <h2 className="text-[14px] font-normal tracking-[1.4px] text-light-turquoise uppercase">
          zakaz@loverflower.by
        </h2>
        <p className="text-[10px] font-light tracking-[1px] uppercase">
          Доставка 24/7 по договоренности с оператором
        </p>
      </div>
      <div className="flex flex-col gap-1.5 items-end">
        <h2 className="text-[14px] font-normal tracking-[1.4px] text-light-turquoise uppercase">
          ул. Тимирязева 67
        </h2>
        <p className="text-[10px] font-light tracking-[1px] uppercase max-w-[80px]">
          10:00 до 21:00 без выходных
        </p>
      </div>
    </div>
  );
};
