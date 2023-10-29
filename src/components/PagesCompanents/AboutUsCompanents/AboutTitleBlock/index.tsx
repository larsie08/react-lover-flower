import { FC } from "react";

export const AboutTitleBlock: FC = () => {
  return (
    <>
      <div className="about_us__path">
        <h3 className="text-[12px] font-normal tracking-[.48px] uppercase">
          Главная / о нас
        </h3>
      </div>
      <div className="about_us__title mt-14">
        <h1 className="flex items-center ml-20 h-[100px] text-[100px] font-normal font-cormorant tracking-[2px] uppercase">
          о нас
        </h1>
      </div>
    </>
  );
};
