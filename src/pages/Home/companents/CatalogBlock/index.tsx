import { FC, memo } from "react";

import { Block } from "./Block";
import { DecorativeElement } from "../../../../components";
import { HomeTitleBlock } from "../TitleBlock";

const BOUQUETS_TITLE_CLASSNAME =
  "sm:absolute text-[160px] top-0 right-0 font-bold tracking-[8px] uppercase text-[#0A1717] max-lg:hidden";
const FLOWERS_TITLE_CLASSNAME =
  "absolute -top-10 left-[5rem] text-[160px] font-bold tracking-[8px] uppercase text-[#0A1717] max-lg:hidden z-0";
const ADDITIONALLY_TITLE_CLASSNAME =
  "absolute top-0 -right-[10rem] text-[160px] max-w-[800px] break-words leading-[1.2] font-bold tracking-[8px] uppercase text-[#0A1717] max-[1536px]:max-w-[500px] max-lg:hidden";

const bouquets: string[] = ["букеты", "для интерьера", "Композиции"];
const flowers: string[] = [
  "Сборные букеты",
  "Монобукеты",
  "Композиции из цветов",
  "розы",
  "свадебные",
];
const additionally: string[] = ["шары", "игрушки", "открытки", "упаковка"];

const CATALOG_TITLE_CLASSNAME =
  "title text-[100px] font-normal tracking-[2px] font-cormorant uppercase max-sm:text-[40px] max-sm:tracking-[0.02em]";

const renderTitleText = () => {
  return (
    <>
      <p
        data-aos="fade-right"
        className="text-[20px] relative z-10 font-light tracking-[.8px] leading-[130%] lg:ml-[90px] max-w-[540px] max-sm:hidden"
      >
        У нас самый большой выбор цветов, букетов, открыток и подарков. Мы
        всегда поможем вам подобрать букет для вашего события. Наш менеджер вас
        проконсультирует и поможет определиться с выбором.
      </p>
      <p
        data-aos="fade-right"
        className="text-[20px] relative z-10 font-light tracking-[.4px] mt-7 lg:ml-[90px] max-sm:hidden"
      >
        Ознакомьтесь с нашими разделами каталога.
      </p>
    </>
  );
};

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
          <HomeTitleBlock
            title="Каталог"
            titleClassName={CATALOG_TITLE_CLASSNAME}
            animation="fade-right"
            renderTitleText={renderTitleText}
          />
          {/* Bouquets Section */}
          <Block
            items={bouquets}
            title="букеты"
            subTitleBlock="готовые букеты из сухоцветов"
            animation="fade-left"
            titleClassName={BOUQUETS_TITLE_CLASSNAME}
            marginTop="lg:mt-36 max-lg:mt-5"
          />
        </div>

        {/* Bottom Section */}
        <div className="catalog_block__bottom flex justify-around max-lg:flex-col max-lg:mt-10">
          <Block
            items={flowers}
            title="Цветы"
            subTitleBlock="Цветы"
            animation="fade-right"
            titleClassName={FLOWERS_TITLE_CLASSNAME}
          />
          <Block
            items={additionally}
            title="дополнительно"
            subTitleBlock="дополнительно"
            animation="fade-left"
            titleClassName={ADDITIONALLY_TITLE_CLASSNAME}
            marginTop="mt-8"
            height="h-[250px]"
          />
        </div>
      </div>
    </section>
  );
});
