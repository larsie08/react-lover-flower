import { FC } from "react";
import { SocialBorderSvg } from "../../../../../../assets";

export const IntroTitleBlock: FC = () => {
  return (
    <div className="intro__title flex items-center containter mx-auto w-full">
      <div className="intro__content flex-1 flex flex-col">
        <h1 className="text-[200px] h-[160px] font-light tracking-[40px] uppercase font-cormorant flex justify-center items-center">
          lover
        </h1>
        <h1 className="text-[200px] h-[160px] font-light tracking-[40px] uppercase font-cormorant flex justify-center items-center relative z-20">
          Flower
        </h1>
      </div>
      <SocialBorderSvg />
    </div>
  );
};
