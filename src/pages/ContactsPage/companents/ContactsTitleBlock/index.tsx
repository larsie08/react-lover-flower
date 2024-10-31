import { FC } from "react";

export const ContactsTitleBlock: FC = () => {
  return (
    <>
      <div className="contacts__path relative z-10">
        <h3 className="text-[12px] font-normal tracking-[.48px] uppercase">
          Главная / контакты
        </h3>
      </div>
      <div className="contacts__title relative z-10 mt-14">
        <h1 className="flex items-center ml-20 h-[100px] text-[100px] font-normal font-cormorant tracking-[2px] uppercase">
          контакты
        </h1>
      </div>
    </>
  );
};
