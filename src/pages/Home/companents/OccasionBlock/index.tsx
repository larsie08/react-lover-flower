import { FC, memo } from "react";
import { Link } from "react-router-dom";

import { OccasionImages, OccasionList, OccasionTitle } from "./components";
import {
  ArrowToBtnAdaptive,
  ArrowToBtnSvg,
  OccasionCherrySvg,
} from "../../../../assets";

type OccasionBlockProps = {
  screenWidth: number;
};

export const OccasionBlock: FC<OccasionBlockProps> = memo(({ screenWidth }) => (
  <div className="occasion_block relative sm:h-[1000px] max-sm:mt-[6rem] mt-[160px]">
    {screenWidth > 640 && <OccasionCherrySvg />}
    <div className="occasion_block__wrapper container mx-auto">
      <div className="occasion_block__top flex sm:justify-between max-sm:justify-center">
        <OccasionTitle />
        <div className="img_block mr-[130px] max-sm:hidden">
          <img
            src="./img/PagesImg/HomeImg/OccasionImg/packing.png"
            alt="packing"
          />
        </div>
      </div>

      <div className="occasion_block__bottom relative flex justify-around mt-8">
        <div className="content_block flex flex-col gap-8">
          <p className="sm:max-w-[255px] text-[14px] font-normal sm:leading-normal tracking-[.56px] uppercase max-sm:w-[300px] max-sm:tracking-[0.02em]">
            Мы готовы прийти на помощь и собрать уникальный букет, на любой
            вкус, бюджет и для любого события по вашему индивидуальному заказу.
          </p>
          <OccasionList />
          {screenWidth > 640 ? <ArrowToBtnSvg /> : <ArrowToBtnAdaptive />}
          <Link
            to="catalog"
            className="h-[50px] text-[12px] font-bold tracking-[1.2px] text-center p-4 transition uppercase text-[black] bg-light-turquoise hover:bg-cherry hover:text-[white] focus:border focus:border-cherry active:bg-cherry active:text-[white] active:shadow-[0_0_10px_0_#1B000E_inset]"
          >
            собрать индивидуальный букет
          </Link>
        </div>
        <div className="img_block max-sm:hidden sm:block">
          <OccasionImages />
        </div>
      </div>
    </div>
  </div>
));
