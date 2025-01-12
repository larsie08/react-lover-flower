import { FC } from "react";

export const QuestionDescriptionBlock: FC = () => {
  return (
    <div className="flex flex-col z-20 sm:gap-14 max-sm:mt-[8rem] max-sm:gap-5 max-sm:ml-2">
      <div className="line border-t-[1px] border-light-turquoise sm:max-w-[255px] max-sm:w-[96px]"></div>
      <p className="max-sm:text-[14px] max-sm:font-normal max-sm:tracking-[0.04em] md:w-[255px]">
        Отправьте ваш вопрос, заказ, предложение или жалобу через форму обратной
        связи, и наш специалист свяжется с вами в течение 15 минут.
      </p>
    </div>
  );
};
