import { FC, memo } from "react";

type StepBlockProps = {
  step: number;
  info: string;
};

export const StepBlock: FC<StepBlockProps> = memo(({ step, info }) => {
  return (
    <div
      className="content_block flex flex-col gap-3 
    max-sm:[&:nth-child(1)]:items-end max-sm:[&:nth-child(1)]:mr-[3rem] 
    max-sm:[&:nth-child(2)]:items-end max-sm:[&:nth-child(2)]:mr-[6rem] 
    max-sm:[&:nth-child(3)]:items-center 
    max-sm:[&:nth-child(4)]:items-center
    max-sm:[&:nth-child(5)]:items-center"
    >
      <h1 className="title text-pink text-[30px] font-bold tracking-[1.2px] uppercase max-sm:text-[20px] max-sm:tracking-[0.04em] max-sm:[&:nth-child(1)]:mr-[6rem]">
        {step} шаг
      </h1>
      <p
        className="text-[14px] sm:max-w-[260px] font-normal tracking-[.56px] uppercase max-sm:w-[150px]"
      >
        {info}
      </p>
    </div>
  );
});
