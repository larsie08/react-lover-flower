import { FC } from "react";
import { QuestionCherrySvg, QuestionLightTurquoiseSvg } from "../../../assets";

export const QuestionBlock: FC = () => {
  return (
    <div className="question_block relative bg-[#0F2222] h-[700px]">
      <div className="bg-[url(/img/questionImg/questions.png)] w-[305px] h-[200px] absolute rotate-[-18.444deg] z-30 left-[45rem] bottom-[8rem]" />
      <div className="bg-[url(/img/questionImg/leaves.png)] w-[691px] h-[1038px] z-20 absolute left-0 top-0" />
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

        <div className="question_block__form relative flex flex-col items-end mt-8">
          <form className="w-[455px] flex flex-col gap-3">
            <input
              className="w-full h-[60px] border border-light-turquoise bg-[#0F2222] p-4 placeholder:text-[#395959] text-[14px] font-normal tracking-[.56px] uppercase"
              type="text"
              placeholder="Ваше имя"
            />
            <input
              className="w-full h-[60px] border border-light-turquoise bg-[#0F2222] p-4 placeholder:text-[#395959] text-[14px] font-normal tracking-[.56px] uppercase"
              type="tel"
              placeholder="+7 (977) 777-77-77"
            />
            <input
              className="w-full h-[120px] border border-light-turquoise bg-[#0F2222] placeholder:-translate-y-8 p-4 placeholder:text-[#395959] text-[14px] font-normal tracking-[.56px] uppercase"
              type="text"
              placeholder="Ваш комментарий"
            />
            <button className="w-[255px] mt-2 text-[black] text-[12px] border border-light-turquoise font-bold tracking-[1.2px] uppercase bg-light-turquoise p-4 hover:border-cherry hover:bg-cherry hover:text-[white] focus:border focus:border-cherry focus active:bg-cherry active:text-[white] active:shadow-[0_0_10px_0_#1B000E_inset]">
              отправить
            </button>
            <p className="max-w-[342px] text-[10px] font-normal tracking-[0.2px] font-roboto_condensed">
              Нажимая на кнопку «Отправить», я даю свое согласие на обработку
              персональных данных, в соответствии с
              <span className="text-pink underline ml-1">
                Политикой конфиденциальности
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
