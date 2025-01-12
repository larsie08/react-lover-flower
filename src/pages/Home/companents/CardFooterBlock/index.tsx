import { FC, memo } from "react";

import { BouquetsImagesBlock, SocialIconsBlock } from "./components";
import { DecorativeElement } from "../../../../components";
import {
  CardCherryAdaptiveSvg,
  CardCherrySvg,
  CardLightSvg,
} from "../../../../assets";

type CardFooterBlockProps = {
  screenWidth: number;
};

export const CardFooterBlock: FC<CardFooterBlockProps> = memo(
  ({ screenWidth }) => {
    const isLargeScreen = screenWidth > 640;

    return (
      <div className="card_footer_block relative h-[500px] mt-[10rem] max-lg:px-2">
        {isLargeScreen ? <CardCherrySvg /> : <CardCherryAdaptiveSvg />}
        {isLargeScreen && <CardLightSvg />}
        <DecorativeElement
          className="absolute -bottom-[10rem] right-[45rem] z-10 h-[212px] w-[400px] rotate-[21.097deg] bg-light-turquoise rounded-[880px] blur-[125px]
        max-lg:w-[259px] max-lg:h-[106px] max-lg:rotate-[21.097deg] max-lg:blur-[50px] max-lg:-bottom-[3.5rem] max-lg:-left-[10rem]"
        />
        <div className="card_footer_block__wrapper relative flex justify-around lg:mt-80 container mx-auto max-lg:flex-col-reverse max-lg:mt-[5rem]">
          <h2 className="absolute left-0 overflow-hidden text-[#0A1717] text-[200px] font-bold tracking-[8px] uppercase max-lg:hidden lg:max-w-[1000px]">
            instagram
          </h2>
          <BouquetsImagesBlock />
          <div className="card_footer_block__socials flex lg:flex-col z-20 max-lg:justify-around">
            <div className="signature relative">
              <div className="border-t-[1px] lg:w-[350px] border-light-turquoise max-lg:w-[133px]"></div>
              <img
                className="absolute left-0 lg:-top-24 max-lg:w-[133px] max-lg:h-[121px] max-lg:-top-[4rem]"
                src="./img/PagesImg/HomeImg/CardImg/ourSocialNetworks.png"
                alt="signature"
              />
            </div>
            <SocialIconsBlock />
          </div>
        </div>
      </div>
    );
  }
);
