import { FC } from "react";

export const DeliveryTitleBlock: FC = () => {
  return (
    <>
      <div className="delivery_page__path">
        <h3 className="text-[12px] font-normal tracking-[.48px] uppercase">
          Главная / доставка и оплата
        </h3>
      </div>
      <div className="delivery_page__title mt-14">
        <h1 className="flex items-center h-[100px] text-[100px] font-normal font-cormorant tracking-[2px] uppercase">
          доставка
        </h1>
        <h1 className="flex items-center ml-20 h-[100px] text-[100px] font-normal font-cormorant tracking-[2px] uppercase">
          и оплата
        </h1>
      </div>
    </>
  );
};
