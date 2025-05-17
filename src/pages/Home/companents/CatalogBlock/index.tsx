import { FC, memo } from "react";

import { Block } from "./Block";
import { DecorativeElement } from "../../../../components";
import { HomeTitleBlock } from "../TitleBlock";
import { motion } from "framer-motion";
import { useScreenWidth } from "../../../../utils/useScreenWidth";

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
      <motion.p
        initial={{
          opacity: 0,
          y: useScreenWidth() <= 768 ? 100 : 0,
          x: useScreenWidth() >= 768 ? -100 : 0,
        }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 max-w-[540px] text-[20px] font-light leading-[130%] tracking-[.8px] max-sm:hidden lg:ml-[90px]"
      >
        У нас самый большой выбор цветов, букетов, открыток и подарков. Мы
        всегда поможем вам подобрать букет для вашего события. Наш менеджер вас
        проконсультирует и поможет определиться с выбором.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 mt-7 text-[20px] font-light tracking-[.4px] max-sm:hidden lg:ml-[90px]"
      >
        Ознакомьтесь с нашими разделами каталога.
      </motion.p>
    </>
  );
};

export const CatalogBlock: FC<{ screenWidth: number }> = memo(
  ({ screenWidth }) => {
    return (
      <section className="catalog_block__wrapper mt-[100px] lg:h-[1100px]">
        <div className="container relative mx-auto flex h-full flex-col max-lg:items-center">
          {/* Decorative Elements */}
          <DecorativeElement className="absolute top-[34rem] z-10 h-[236px] w-[707px] rotate-[32.828deg] rounded-[50%] bg-cherry blur-[125px] max-sm:right-0 max-sm:top-[50rem] max-sm:h-[237px] max-sm:rotate-[-37.57deg]" />
          <DecorativeElement className="absolute right-[2rem] top-[24rem] z-10 h-[211px] w-[880px] rotate-[32.828deg] rounded-[50%] bg-light-turquoise blur-[125px] max-sm:top-[20rem] max-sm:h-[128px]" />

          {/* Top Section */}
          <div className="catalog_block__top relative flex max-lg:flex-col max-md:justify-center lg:justify-around">
            <HomeTitleBlock
              title="Каталог"
              titleClassName={CATALOG_TITLE_CLASSNAME}
              animation={screenWidth >= 768 ? "fade-right" : "fade-bottom"}
              renderTitleText={renderTitleText}
            />
            {/* Bouquets Section */}
            <Block
              items={bouquets}
              title="букеты"
              subTitleBlock="готовые букеты из сухоцветов"
              animation={screenWidth >= 768 ? "fade-left" : "fade-bottom"}
              titleClassName={BOUQUETS_TITLE_CLASSNAME}
              marginTop="lg:mt-36 max-lg:mt-5"
            />
          </div>

          {/* Bottom Section */}
          <div className="catalog_block__bottom flex justify-around max-lg:mt-10 max-lg:flex-col">
            <Block
              items={flowers}
              title="Цветы"
              subTitleBlock="Цветы"
              animation={screenWidth >= 768 ? "fade-right" : "fade-bottom"}
              titleClassName={FLOWERS_TITLE_CLASSNAME}
            />
            <Block
              items={additionally}
              title="дополнительно"
              subTitleBlock="дополнительно"
              animation={screenWidth >= 768 ? "fade-left" : "fade-bottom"}
              titleClassName={ADDITIONALLY_TITLE_CLASSNAME}
              marginTop="mt-8"
              height="h-[250px]"
            />
          </div>
        </div>
      </section>
    );
  },
);
