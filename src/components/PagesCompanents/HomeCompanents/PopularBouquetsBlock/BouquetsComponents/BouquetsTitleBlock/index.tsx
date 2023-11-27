import { FC } from "react";

export const BouquetsTitleBlock: FC = () => {
  return (
    <div className="popular_bouquets__title flex flex-col">
      <h1 className="title relative z-20 flex items-center h-[100px] text-[100px] font-normal tracking-[2px] uppercase font-cormorant">
        Популярные
      </h1>
      <h2 className="title relative z-20 flex justify-center items-center h-[100px] text-[100px] font-normal tracking-[2px] uppercase font-cormorant">
        букеты
      </h2>
      <h3 className="subtitle relative z-20 flex justify-center items-center mt-5 text-[20px] font-light tracking-[.4px]">
        Самые любимые композиции наших клиентов
      </h3>
    </div>
  );
};
