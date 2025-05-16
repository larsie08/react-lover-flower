import { FC, memo } from "react";

import { QuestionDescriptionBlock, QuestionFormBlock } from "./components";
import { HomeTitleBlock } from "../TitleBlock";

import {
  CherryAdaptiveSvg,
  LightTurquoiseAdaptiveSvg,
  QuestionCherrySvg,
  QuestionLightTurquoiseSvg,
} from "../../../../assets";

type QuestionBlockProps = {
  screenWidth: number;
};

const QUESTION_TITLE_CLASSNAME =
  "title flex items-center sm:h-[100px] text-[100px] font-cormorant font-normal tracking-[2px] uppercase max-sm:text-[40px] max-sm:tracking-[0.02em]";
const QUESTION_SUBTITLE_CLASSNAME = `${QUESTION_TITLE_CLASSNAME} sm:ml-24`;

export const QuestionBlock: FC<QuestionBlockProps> = memo(({ screenWidth }) => {
  const isLargeScreen = screenWidth > 768;

  return (
    <div className="question_block relative h-[850px] bg-[#0F2222] max-lg:mt-[6rem] max-sm:h-[800px]">
      <picture>
        <source
          srcSet="./img/PagesImg/HomeImg/QuestionImg/leaves-640.png 640w"
          media="(max-width: 767px)"
        />
        <img
          className="absolute top-0 z-20 object-fill max-md:right-0 max-md:h-[379px] max-md:w-[252px] md:left-0 lg:h-[1038px] lg:w-[691px]"
          src="./img/PagesImg/HomeImg/QuestionImg/leaves.png"
          srcSet="./img/PagesImg/HomeImg/QuestionImg/leaves.png 1280w, ./img/PagesImg/HomeImg/QuestionImg/leaves-640.png 640w"
          loading="lazy"
          alt="flower"
        />
      </picture>
      <picture>
        <source
          srcSet="./img/PagesImg/HomeImg/QuestionImg/questions-640.png 640w"
          media="(max-width: 767px)"
        />
        <img
          className="absolute z-30 max-xl:bottom-[1rem] max-xl:right-[10rem] max-lg:right-[5rem] max-lg:top-[12rem] max-lg:rotate-[-18.444deg] max-md:right-0 max-md:top-[5rem] max-sm:right-[9rem] max-sm:top-[8rem] max-sm:w-[133px] xl:h-[200px] xl:w-[305px]"
          src="./img/PagesImg/HomeImg/QuestionImg/questions.png"
          srcSet="./img/PagesImg/HomeImg/QuestionImg/questions.png 1280w, ./img/PagesImg/HomeImg/QuestionImg/questions-640.png 640w"
          loading="lazy"
          alt="Questions Decoration"
        />
      </picture>

      {isLargeScreen ? <QuestionCherrySvg /> : <CherryAdaptiveSvg />}
      {isLargeScreen ? (
        <QuestionLightTurquoiseSvg />
      ) : (
        <LightTurquoiseAdaptiveSvg />
      )}

      <div className="question_block__wrapper container sm:mx-auto">
        <div className="question_block__top flex justify-between pt-8 max-lg:flex-col sm:items-center">
          <HomeTitleBlock
            title="остались"
            subtitle="вопросы?"
            titleClassName={QUESTION_TITLE_CLASSNAME}
            subtitleClassName={QUESTION_SUBTITLE_CLASSNAME}
            animation="fade-right"
          />
          <QuestionDescriptionBlock />
        </div>
        <QuestionFormBlock />
      </div>
    </div>
  );
});
