import { FC } from "react";

import {
  QuestionCherrySvg,
  QuestionLightTurquoiseSvg,
} from "../../../../assets";

import { QuestionFormBlock } from "./QuestionFormBlock";
import { DecorativeElement } from "../../../../components/DecorativeElement";

export const QuestionBlock: FC = () => {
  return (
    <div className="question_block relative bg-[#0F2222] h-[700px]">
      <DecorativeElement className="bg-[url(/img/PagesImg/HomeImg/QuestionImg/questions.png)] w-[305px] h-[200px] absolute rotate-[-18.444deg] z-30 left-[45rem] bottom-[8rem]" />
      <DecorativeElement className="bg-[url(/img/PagesImg/HomeImg/QuestionImg/leaves.png)] w-[691px] h-[1038px] z-20 absolute left-0 top-0" />
      <QuestionCherrySvg />
      <QuestionLightTurquoiseSvg />
      <div className="question_block__wrapper container mx-auto">
        <div className="question_block__top flex justify-between items-center pt-8">
          <div className="question_block__title flex z-30 flex-col">
            <h1 className="title flex items-center h-[100px] text-[100px] font-cormorant font-normal tracking-[2px] uppercase">
              остались
            </h1>
            <h1 className="title flex items-center h-[100px] ml-24 text-[100px] font-cormorant font-normal tracking-[2px] uppercase">
              вопросы?
            </h1>
          </div>

          <div className="max-w-[255px] flex flex-col gap-14">
            <div className="line border-t-[1px] border-light-turquoise"></div>
            <p>
              Отправьте ваш вопрос, заказ, предложение или жалобу через форму
              обратной связи, и наш специалист свяжется с вами в течение 15
              минут.
            </p>
          </div>
        </div>
        <QuestionFormBlock />
      </div>
    </div>
  );
};
