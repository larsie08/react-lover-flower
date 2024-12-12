import { FC, memo } from "react";
import { SocialBorderSvg } from "../../../../../assets";

type IntroTitleBlockProps = {
  screenWidth: number;
};

export const IntroTitleBlock: FC<IntroTitleBlockProps> = memo(
  ({ screenWidth }) => {
    return (
      <div className="intro__title flex items-center containter mx-auto w-full">
        <div className="intro__content flex-1 flex flex-col">
          <h1 className="text-[200px] sm:h-[160px] font-light tracking-[40px] uppercase font-cormorant flex justify-center items-center max-sm:z-30 max-sm:text-[50px] max-sm:tracking-[0.1em]">
            lover
          </h1>
          <h1 className="text-[200px] sm:h-[160px] font-light tracking-[40px] uppercase font-cormorant flex justify-center items-center relative sm:z-20 max-sm:text-[50px] max-sm:tracking-[0.1em]">
            Flower
          </h1>
        </div>
        {screenWidth >= 640 && <SocialBorderSvg />}
      </div>
    );
  }
);
