import { FC, memo } from "react";
import { Link } from "react-router-dom";

import { OccasionImages, OccasionList } from "./components";
import {
  ArrowToBtnAdaptive,
  ArrowToBtnSvg,
  OccasionCherrySvg,
} from "../../../../assets";
import { HomeTitleBlock } from "../TitleBlock";
import { motion } from "framer-motion";

const SUBTITLE_WRAPPER_CLASSNAME =
  "flex items-center lg:ml-[130px] lg:gap-7 max-lg:gap-2";
const TITLE_CLASSNAME =
  "text-[100px] font-normal tracking-[2px] uppercase font-cormorant max-md:text-[40px] max-md:tracking-[0.02em]";

type OccasionBlockProps = {
  screenWidth: number;
};

export const OccasionBlock: FC<OccasionBlockProps> = memo(({ screenWidth }) => {
  return (
    <div className="occasion_block relative sm:h-[1000px] max-lg:mt-[6rem] mt-[160px]">
      {screenWidth > 640 && <OccasionCherrySvg />}
      <div className="occasion_block__wrapper container mx-auto">
        <div className="occasion_block__top flex lg:justify-between max-lg:justify-center">
          <HomeTitleBlock
            title="особенный"
            subtitle="повод?"
            titleClassName={TITLE_CLASSNAME}
            subtitleClassName={TITLE_CLASSNAME}
            animation="fade-right"
            subtitleWrapperClassName={SUBTITLE_WRAPPER_CLASSNAME}
          />
          <div className="img_block mr-[130px] max-lg:hidden relative z-20 flex justify-center items-center">
            <motion.img
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="w-[255px] h-[223px]"
              src="./img/PagesImg/HomeImg/OccasionImg/packing.png"
              alt="packing"
            />
          </div>
        </div>

        <div className="occasion_block__bottom relative flex justify-around mt-8">
          <div className="content_block flex flex-col gap-8">
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="max-w-[255px] text-[14px] font-normal sm:leading-normal tracking-[.56px] uppercase max-lg:w-[300px] max-lg:tracking-[0.02em]"
            >
              Мы готовы прийти на помощь и собрать уникальный букет, на любой
              вкус, бюджет и для любого события по вашему индивидуальному
              заказу.
            </motion.p>
            <OccasionList />
            {screenWidth > 1024 ? <ArrowToBtnSvg /> : <ArrowToBtnAdaptive />}
            <Link
              to="catalog"
              className="h-[50px] text-[12px] font-bold tracking-[1.2px] text-center p-4 transition uppercase text-[black] bg-light-turquoise hover:bg-cherry hover:text-[white] focus:border focus:border-cherry active:bg-cherry active:text-[white] active:shadow-[0_0_10px_0_#1B000E_inset]"
            >
              собрать индивидуальный букет
            </Link>
          </div>
          <div className="img_block max-md:hidden">
            <OccasionImages />
          </div>
        </div>
      </div>
    </div>
  );
});
