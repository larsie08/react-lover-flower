import { FC } from "react";

export const CorporateTitleBlock: FC = () => {
  return (
    <>
      <div className="contacts__path relative z-10">
        <h3 className="text-[12px] font-normal tracking-[.48px] uppercase">
          Главная / корпоративным клиентам
        </h3>
      </div>
      <div className="contacts__title relative z-10 mt-14">
        <h1 className="flex items-center ml-20 h-[100px] text-[100px] font-normal font-cormorant tracking-[2px] uppercase">
          Букеты
        </h1>
        <div>
          <h2 className="h-[40px] text-[40px] ml-20 font-normal font-cormorant tracking-[0.8px] uppercase">поздравления для</h2>
          <h2 className="text-[40px] ml-40 font-normal font-cormorant tracking-[0.8px] uppercase">ваших работников</h2>
        </div>
      </div>
    </>
  );
};
