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
    <div className="question_block relative bg-[#0F2222] max-sm:h-[800px] h-[850px] max-lg:mt-[6rem]">
      <img
        srcSet="./img/PagesImg/HomeImg/QuestionImg/questions.png 1280w, ./img/PagesImg/HomeImg/QuestionImg/questions-640.png 640w"
        className="xl:w-[305px] xl:h-[200px] absolute max-lg:rotate-[-18.444deg] z-30 max-lg:right-[5rem] max-lg:top-[12rem] max-sm:w-[133px] max-sm:right-[9rem] max-sm:top-[8rem] max-md:top-[5rem] max-md:right-0 max-xl:bottom-[1rem] max-xl:right-[10rem]"
        alt="Questions Decoration"
      />
      <img
        srcSet="./img/PagesImg/HomeImg/QuestionImg/leaves-640.png 640w, ./img/PagesImg/HomeImg/QuestionImg/leaves.png 1280w"
        className="lg:w-[691px] lg:h-[1038px] z-20 absolute md:left-0 top-0 max-md:right-0 object-fill max-md:w-[252px] max-md:h-[379px]"
        alt="Leaves Decoration"
      />
      {isLargeScreen ? <QuestionCherrySvg /> : <CherryAdaptiveSvg />}
      {isLargeScreen ? (
        <QuestionLightTurquoiseSvg />
      ) : (
        <LightTurquoiseAdaptiveSvg />
      )}

      <div className="question_block__wrapper container sm:mx-auto">
        <div className="question_block__top flex justify-between sm:items-center pt-8 max-lg:flex-col">
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
