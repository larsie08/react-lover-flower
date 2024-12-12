import { FC, memo } from "react";

export const BouquetsTitleBlock: FC = memo(() => {
  return (
    <div className="popular_bouquets__title flex flex-col max-sm:items-center">
      <h1 className="title relative z-20 flex items-center h-[100px] text-[100px] font-normal tracking-[2px] uppercase font-cormorant max-sm:text-[40px] max-sm:tracking-[0.02em] max-sm:h-[50px]">
        Популярные
      </h1>
      <h2 className="title relative z-20 flex justify-center items-center h-[100px] text-[100px] font-normal tracking-[2px] uppercase font-cormorant max-sm:text-[40px] max-sm:tracking-[0.02em] max-sm:h-[50px]">
        букеты
      </h2>
      <h3 className="subtitle relative z-20 flex justify-center items-center sm:mt-5 text-[20px] font-light tracking-[.4px] sm:mb-20 max-sm:text-[14px] max-sm:tracking-[0.04em]">
        Самые любимые композиции наших клиентов
      </h3>
    </div>
  );
});
