import { FC } from "react";

import { CategoryBlock } from "./CategoryBlock";

export const CatalogTitleBlock: FC = () => {
  return (
    <div className="relative z-10">
      <div className="catalog__path">
        <h3 className="text-[12px] font-normal tracking-[.48px] uppercase">
          Главная / Каталог
        </h3>
      </div>
      <div className="max-w-[950px] mt-5 p-5 bg-[#000]/[0.30] backdrop-blur-[10px] rounded-[20px]">
        <div className="catalog__title relative z-10">
          <h1 className="flex items-center  h-[100px] text-[100px] font-normal font-cormorant tracking-[2px] uppercase">
            каталог
          </h1>
          <h1 className="flex items-center ml-[270px] h-[100px] text-[100px] font-normal font-cormorant tracking-[2px] uppercase">
            букетов
          </h1>
          <h2 className="subtitle max-w-[430px] mt-5 ml-[270px] text-[14px] font-normal tracking-[0.56px] uppercase">
            В нашем магазине самый большой выбор букетов для любых событий:
          </h2>
        </div>
        <CategoryBlock />
      </div>
    </div>
  );
};
