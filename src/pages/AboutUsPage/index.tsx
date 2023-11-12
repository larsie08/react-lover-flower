import { FC } from "react";

import {
  AboutTeamBlock,
  AboutTitleBlock,
  AboutGuaranteesBlock,
  AboutOrderBlock,
  DecorativeElement,
} from "../../components";

import { AboutBgColorBottom } from "../../assets";

const AboutUsPage: FC = () => {
  return (
    <div className="about_us relative pt-[120px] h-[2400px] bg-[#040A0A]">
      <DecorativeElement className="absolute left-0 top-0 h-[220px] w-[274px] -rotate-[71.859deg] rounded-[274px] bg-[#C8A156] blur-[125px]" />
      <img
        className="absolute left-0"
        src="./img/bgElements/AboutUsBg/AboutFlowerTopLeft.png"
        alt="flower"
      />
      <DecorativeElement className="absolute right-[38rem] top-[18rem] h-[294px] w-[235px] -rotate-[71.859deg] rounded-[294px] bg-[#C8A156] blur-[125px]" />
      <img
        className="absolute w-[928px] h-[690px] right-0 -top-[172px] min-[2300px]:right-28"
        src="./img/bgElements/AboutUsBg/AboutFlowerTopRight.png"
        alt="flower"
      />
      <div className="about_us__wrapper relative container mx-auto">
        <AboutTitleBlock />
        <div className="about_us__subtitle ml-48 mt-24 flex gap-5">
          <h2 className="max-w-[250px] text-[60px] text-light-turquoise font-normal font-cormorant leading-[64px] tracking-[1.2px] uppercase">
            Lover flower
          </h2>
          <div className="mb-8 w-[60px] border-b-[1px] border-light-turquoise" />
        </div>
        <AboutTeamBlock />
        <AboutGuaranteesBlock />
        <AboutOrderBlock />
        <div className="about_us__bottom_content flex flex-col mt-44 gap-10">
          <h2 className="max-w-[1300px] text-[60px] font-normal font-cormorant leading-[64px] tracking-[1.2px] uppercase">
            Природная гармония цвета, неповторимость бутонов и Ваши чувства в
            нежных лепестках не оставят никого равнодушным.
          </h2>
          <h3 className="max-w-[445px] ml-48 text-[20px] font-light tracking-[0.4px] uppercase">
            Вы выбираете и заказываете цветочный сюрприз, а мы вкладываем в него
            душу!
          </h3>
        </div>
      </div>
      <DecorativeElement className="absolute left-0 -bottom-[15rem] h-[437px] w-[206px] rotate-[21.097deg] rounded-[437px] bg-[#C8A156] blur-[125px]" />
      <img
        className="absolute right-0 -bottom-[5rem]"
        src="./img/bgElements/AboutUsBg/AboutFlowerBottom.png"
        alt="flower"
      />
      <AboutBgColorBottom />
    </div>
  );
};

export default AboutUsPage;
