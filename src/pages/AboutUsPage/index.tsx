import { FC } from "react";

import { DecorativeElement, PathBlock, TitlePageBlock } from "../../components";
import {
  AboutGuaranteesBlock,
  AboutOrderBlock,
  AboutTeamBlock,
} from "./companents";

const titlePathItems = [
  { text: "Главная", path: "/" },
  { text: "о нас", path: "/aboutUs" },
];

const TITLE_CLASSNAME =
  "flex items-center ml-20 h-[100px] md:text-[100px] max-md:text-[40px] font-normal font-cormorant tracking-[2px] uppercase";
const TITLE_WRAPPER_CLASSNAME = "about_us__title md:mt-14 max-md:mt-8";

const AboutUsPage: FC = () => {
  return (
    <div className="about_us relative pt-[120px] md:pb-[200px] max-md:pb-[110px] bg-[#040A0A]">
      <DecorativeElement className="absolute left-0 top-0 h-[220px] w-[274px] -rotate-[71.859deg] rounded-[274px] bg-[#C8A156] blur-[125px]" />
      <DecorativeElement className="absolute right-[38rem] top-[18rem] h-[294px] w-[235px] -rotate-[71.859deg] rounded-[294px] bg-[#C8A156] blur-[125px] max-md:hidden" />

      <picture>
        <source
          srcSet="./img/PagesImg/AboutUsImg/adaptiveFlowerTopLeft.png 640w"
          media="(max-width: 767px)"
        />
        <img
          className="absolute md:w-[640px] md:h-[814px] max-md:w-[240px] max-md:h-[300px] left-0 max-md:top-[5rem]"
          src="./img/PagesImg/AboutUsImg/AboutFlowerTopLeft.png"
          srcSet="./img/PagesImg/AboutUsImg/AboutFlowerTopLeft.png 1280w, ./img/PagesImg/AboutUsImg/adaptiveFlowerTopLeft.png 640w"
          loading="lazy"
          alt="flower"
        />
      </picture>

      <picture>
        <source
          srcSet="./img/PagesImg/AboutUsImg/adaptiveFlowerTopRight.png 640w"
          media="(max-width: 767px)"
        />
        <img
          className="absolute md:w-[928px] md:h-[690px] max-md:w-[150px] max-md:h-[270px] right-0 md:-top-[172px] max-md:top-[130px]"
          src="./img/PagesImg/AboutUsImg/AboutFlowerTopRight.png"
          srcSet="./img/PagesImg/AboutUsImg/AboutFlowerTopRight.png 1280w, ./img/PagesImg/AboutUsImg/adaptiveFlowerTopRight.png 640w"
          loading="lazy"
          alt="flower"
        />
      </picture>

      <div className="about_us__wrapper relative container mx-auto max-md:p-4">
        <PathBlock items={titlePathItems} />

        <TitlePageBlock
          title="о нас"
          titleClassName={TITLE_CLASSNAME}
          wrapperClassName={TITLE_WRAPPER_CLASSNAME}
        />

        <div className="about_us__subtitle md:ml-48 md:mt-24 max-md:mt-14 flex gap-5">
          <h2 className="md:max-w-[250px] max-md:w-[82px] md:text-[60px] max-md:text-[20px] text-light-turquoise font-normal font-cormorant md:leading-[64px] tracking-[1.2px] uppercase">
            Lover flower
          </h2>
          <div className="md:mb-8 max-md:mb-[14px] md:w-[60px] max-md:w-[20px] border-b-[1px] border-light-turquoise" />
        </div>
        <AboutTeamBlock />
        <AboutGuaranteesBlock />
        <AboutOrderBlock />
        <div className="about_us__bottom_content flex flex-col md:mt-44 max-md:mt-[4rem] gap-10 relative z-20">
          <h2 className="max-w-[1300px] md:text-[60px] max-md:text-[20px] font-normal font-cormorant md:leading-[64px] tracking-[1.2px] uppercase">
            Природная гармония цвета, неповторимость бутонов и Ваши чувства в
            нежных лепестках не оставят никого равнодушным.
          </h2>
          <h3 className="max-w-[445px] md:ml-48 md:text-[20px] max-md:text-[14px] font-light tracking-[0.4px] uppercase">
            Вы выбираете и заказываете цветочный сюрприз, а мы вкладываем в него
            душу!
          </h3>
        </div>
      </div>

      <DecorativeElement className="absolute left-0 md:-bottom-[15rem] max-md:bottom-[10rem] md:h-[437px] max-md:h-[180px] w-[206px] rotate-[21.097deg] rounded-[437px] bg-[#C8A156] md:blur-[125px] max-md:blur-[100px]" />
      <DecorativeElement className="absolute md:right-0 max-md:left-0 md:-bottom-48 max-md:-bottom-[6rem] md:w-[320px] max-md:w-[250px] md:h-[400px] max-md:h-[100px] rounded-[500px] bg-[#C8A156] blur-[125px]" />
      <img
        className="absolute right-0 -bottom-[5rem] z-10"
        src="./img/PagesImg/AboutUsImg/AboutFlowerBottom.png"
        loading="lazy"
        alt="flower"
      />
    </div>
  );
};

export default AboutUsPage;
