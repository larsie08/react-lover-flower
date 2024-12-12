import { FC } from "react";

export const OccasionTitle: FC = () => (
  <div className="occasion_block__title flex flex-col">
    <h1 className="text-[100px] font-normal tracking-[2px] uppercase font-cormorant max-sm:text-[40px] max-sm:tracking-[0.02em]">
      особенный
    </h1>
    <div className="flex items-center sm:ml-[130px] sm:gap-7 max-sm:gap-2">
      <div className="border-t-[1px] border-pink max-sm:w-[95px]"></div>
      <h1 className="text-[100px] font-normal tracking-[2px] uppercase font-cormorant max-sm:text-[40px] max-sm:tracking-[0.02em]">
        повод?
      </h1>
    </div>
  </div>
);
