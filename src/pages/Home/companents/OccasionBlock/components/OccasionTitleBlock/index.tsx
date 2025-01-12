import { FC } from "react";

export const OccasionTitle: FC = () => (
  <div className="occasion_block__title flex flex-col">
    <h1 className="text-[100px] font-normal tracking-[2px] uppercase font-cormorant max-md:text-[40px] max-md:tracking-[0.02em]">
      особенный
    </h1>
    <div className="flex items-center lg:ml-[130px] lg:gap-7 max-lg:gap-2">
      <div className="border-t-[1px] border-pink max-lg:w-[95px]"></div>
      <h1 className="text-[100px] font-normal tracking-[2px] uppercase font-cormorant max-md:text-[40px] max-md:tracking-[0.02em]">
        повод?
      </h1>
    </div>
  </div>
);
