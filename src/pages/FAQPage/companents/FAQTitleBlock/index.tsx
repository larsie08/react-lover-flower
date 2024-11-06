import { FC } from "react";

export const FAQTitleBlock: FC = () => {
  return (
    <>
      <div className="FAQ_page__path relative z-10 select-none">
        <h3 className="text-[12px] font-normal tracking-[.48px] uppercase">
          Главная / faq
        </h3>
      </div>
      <div className="FAQ_page__title flex items-center relative z-10 mt-14 select-none">
        <div className="w-[65px] border-t-[1px] border-light-turquoise"></div>
        <h1 className="flex items-center ml-10 h-[100px] text-[100px] font-normal font-cormorant tracking-[2px] uppercase">
          faq
        </h1>
      </div>
    </>
  );
};
