import { FC } from "react";
import { AdditionallyBlock, BouquetsBlock, FlowersBlock } from "./Blocks";

export const CatalogBlock: FC = () => {
  return (
    <div className="catalog_block__wrapper h-[1000px]">
      <div className="container relative h-full flex flex-col mx-auto">
        <div className="absolute container h-full">
          <div className="absolute z-10 top-[34rem] w-[707px] h-[236px] bg-cherry rotate-[32.828deg] rounded-[708px] blur-[125px]"></div>
          <div className="absolute z-10 top-[24rem] right-[2rem] float-right w-[880px] h-[211px] bg-light-turquoise rotate-[32.828deg] rounded-[880px] blur-[125px]"></div>
        </div>
        <div className="catalog_block__header relative flex justify-around">
          <div className="catalog_block__title">
            <h1 className="title text-[100px] font-normal tracking-[2px] font-cormorant uppercase">
              каталог
            </h1>
            <p className="text-[20px] relative z-10 font-light tracking-[.8px] leading-[130%] ml-[90px] max-w-[540px]">
              У нас самый большой выбор цветов, букетов, открыток и подарков. Мы
              всегда поможем вам подобрать букет для вашего события, наш
              менеджер вас проконсультирует и поможет определиться с выбором
            </p>
            <p className="text-[20px] relative z-10 font-light tracking-[.4px] mt-7 ml-[90px]">
              Ознакомьтесь с нашими разделами каталога
            </p>
          </div>
          <BouquetsBlock />
        </div>
        <div className="catalog_block__footer flex justify-around">
          <FlowersBlock />
          <AdditionallyBlock />
        </div>
      </div>
    </div>
  );
};
