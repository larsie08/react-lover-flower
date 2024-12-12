import { FC } from "react";

export const QuestionTitleBlock: FC = () => {
  return (
    <div className="question_block__title flex z-30 flex-col max-sm:ml-2">
      <h1 className="title flex items-center sm:h-[100px] text-[100px] font-cormorant font-normal tracking-[2px] uppercase max-sm:text-[40px] max-sm:tracking-[0.02em]">
        остались
      </h1>
      <h1 className="title flex items-center sm:h-[100px] sm:ml-24 text-[100px] font-cormorant font-normal tracking-[2px] uppercase max-sm:text-[40px] max-sm:tracking-[0.02em]">
        вопросы?
      </h1>
    </div>
  );
};
