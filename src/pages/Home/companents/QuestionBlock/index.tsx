import { FC, memo } from "react";

import {
  QuestionDescriptionBlock,
  QuestionFormBlock,
  QuestionTitleBlock,
} from "./components";

import {
  CherryAdaptiveSvg,
  LightTurquoiseAdaptiveSvg,
  QuestionCherrySvg,
  QuestionLightTurquoiseSvg,
} from "../../../../assets";

type QuestionBlockProps = {
  screenWidth: number;
};

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
        src=""
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
          <QuestionTitleBlock />
          <QuestionDescriptionBlock />
        </div>
        <QuestionFormBlock />
      </div>
    </div>
  );
});
