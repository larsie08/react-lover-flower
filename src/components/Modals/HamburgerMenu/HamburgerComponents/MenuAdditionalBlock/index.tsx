import { FC, memo } from "react";
import { SocialsSvg } from "../../../../../assets";

export const MenuAdditionalBlock: FC = memo(() => {
  return (
    <>
      <div className="flex flex-col">
        <span className="text-[10px] font-normal tracking-[0.04em] text-[#555555]">
          Политика конфиденциальности
        </span>
        <span className="text-[10px] font-normal tracking-[0.04em] text-[#555555]">
          Обработка персональных данных
        </span>
      </div>

      <span className="underline uppercase text-[14px] tracking-[0.1em] font-normal">
        +375 (29) 113-69-69
      </span>

      <div className="mt-2.5">
        <SocialsSvg />
      </div>
    </>
  );
});
