import { FC } from "react";

import {
  CardCherrySvg,
  CardLightSvg,
  InstagramSvg,
  PhoneSocialSvg,
  WhatsappSvg,
} from "../../../../assets";

const socialIcons = [
  "./img/HomeImg/cardImg/tree.png",
  "./img/HomeImg/cardImg/decorations.png",
  "./img/HomeImg/cardImg/candle.png",
  "./img/HomeImg/cardImg/bouquetCard.png",
];

export const CardFooterBlock: FC = () => {
  return (
    <div className="card_footer_block relative h-[500px]">
      <CardCherrySvg />
      <CardLightSvg />
      <div className="absolute -bottom-[10rem] right-[45rem] z-10 h-[212px] w-[400px] rotate-[21.097deg] bg-light-turquoise rounded-[880px] blur-[125px]"></div>
      <div className="card_footer_block__wrapper relative flex justify-around mt-80 container mx-auto">
        <h2 className="absolute left-0 overflow-hidden text-[#0A1717] text-[200px] font-bold tracking-[8px] uppercase">
          instagram
        </h2>
        <ul className="card_footer_block__content flex z-20 gap-8">
          {socialIcons.map((item, i) => (
            <li className="h-[160px] w-[160px]" key={i}>
              <img className="backdrop-blur-[10px]" src={item} alt="card" />
            </li>
          ))}
        </ul>
        <div className="card_footer_block__socials flex flex-col z-20">
          <div className="signature relative">
            <div className="border-t-[1px] w-[350px] border-light-turquoise"></div>
            <img
              className="absolute left-0 -top-24"
              src="./img/HomeImg/cardImg/ourSocialNetworks.png"
              alt="signature"
            ></img>
          </div>
          <ul className="social_icons flex justify-end mt-28 gap-8">
            <li>
              <InstagramSvg />
            </li>
            <li>
              <WhatsappSvg />
            </li>
            <li>
              <PhoneSocialSvg />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
