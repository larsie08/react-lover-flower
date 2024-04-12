import { FC } from "react";

import { DecorativeElement, FAQBlocks, FAQTitleBlock } from "../../components";
import { FAQBgBottom } from "../../assets";

const FAQPage: FC = () => {
  return (
    <div className="FAQ_page relative pt-[120px] h-[1400px] bg-[#040A0A]">
      <DecorativeElement className="absolute w-[465px] h-[220px] top-0 -left-[10rem] bg-[#3D5279] rounded-[466px] blur-[125px]" />
      <DecorativeElement className="absolute w-[328px] h-[220px] top-0 right-0 bg-[#3D5279] rounded-[327px] blur-[125px]" />
      <img
        className="absolute top-0 left-0"
        src="./img/PagesImg/FAQImg/FAQFlowerLeft.png"
        alt="flower"
      />
      <img
        className="absolute top-0 right-0"
        src="./img/PagesImg/FAQImg/FAQFlowerRight.png"
        alt="flower"
      />
      <div className="FAQ_page__wrapper container mx-auto">
        <FAQTitleBlock />
        <FAQBlocks />
      </div>
      <DecorativeElement className="absolute w-[465px] h-[220px] -bottom-[4rem] -left-[12rem] bg-[#3D5279] rounded-[466px] blur-[125px]" />
      <FAQBgBottom />
    </div>
  );
};

export default FAQPage;
