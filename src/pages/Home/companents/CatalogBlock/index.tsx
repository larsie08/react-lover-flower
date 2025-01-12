import { FC, memo } from "react";

import { AdditionallyBlock, BouquetsBlock, FlowersBlock } from "./Blocks";
import { DecorativeElement } from "../../../../components";

const bouquets: string[] = ["букеты", "для интерьера", "Композиции"];
const flowers: string[] = [
  "Сборные букеты",
  "Монобукеты",
  "Композиции из цветов",
  "розы",
  "свадебные",
];
const additionally: string[] = ["шары", "игрушки", "открытки", "упаковка"];

export const CatalogBlock: FC = memo(() => {
  return (
    <section className="catalog_block__wrapper lg:h-[1100px] mt-[100px]">
      <div className="container relative h-full flex flex-col mx-auto max-lg:items-center">
        {/* Decorative Elements */}
        <DecorativeElement
          className="absolute z-10 top-[34rem] w-[707px] h-[236px] bg-cherry rotate-[32.828deg] rounded-[50%] blur-[125px]
          max-sm:h-[237px] max-sm:rotate-[-37.57deg] max-sm:top-[50rem] max-sm:right-0"
        />
        <DecorativeElement
          className="absolute z-10 top-[24rem] right-[2rem] w-[880px] h-[211px] bg-light-turquoise rotate-[32.828deg] rounded-[50%] blur-[125px]
          max-sm:h-[128px] max-sm:top-[20rem]"
        />

        {/* Top Section */}
        <div className="catalog_block__top relative flex lg:justify-around max-lg:flex-col max-md:justify-center">
          <div className="catalog_block__title">
            <h1 className="title text-[100px] font-normal tracking-[2px] font-cormorant uppercase max-sm:text-[40px] max-sm:tracking-[0.02em]">
              Каталог
            </h1>
            <p className="text-[20px] relative z-10 font-light tracking-[.8px] leading-[130%] lg:ml-[90px] max-w-[540px] max-sm:hidden">
              У нас самый большой выбор цветов, букетов, открыток и подарков. Мы
              всегда поможем вам подобрать букет для вашего события. Наш менеджер вас
              проконсультирует и поможет определиться с выбором.
            </p>
            <p className="text-[20px] relative z-10 font-light tracking-[.4px] mt-7 lg:ml-[90px] max-sm:hidden">
              Ознакомьтесь с нашими разделами каталога.
            </p>
          </div>
          {/* Bouquets Section */}
          <BouquetsBlock bouquets={bouquets} />
        </div>

        {/* Bottom Section */}
        <div className="catalog_block__bottom flex justify-around max-lg:flex-col max-lg:mt-10">
          <FlowersBlock flowers={flowers} />
          <AdditionallyBlock additionally={additionally} />
        </div>
      </div>
    </section>
  );
});
