import { FC } from "react";

import {
  AdditionallyBlock,
  CardBlocks,
  DeliveryBlock,
  DeliveryTitleBlock,
} from "../../components";

import { BgColorBottom } from "../../assets";

const DeliveryPage: FC = () => {
  return (
    <div className="delivery_page relative pt-[120px] h-[2600px] bg-[#040A0A]">
      <div className="absolute right-0 top-0 w-[505px] h-[625px] rounded-[625px] bg-[#6B535F] blur-[125px]" />
      <div className="absolute left-0 top-0 w-[274px] h-[220px] rounded-[274px] bg-[#6B535F] blur-[125px]" />
      <div className="absolute -left-[5rem] top-[70rem] w-[538px] h-[431px] rounded-[537px] bg-[#6B535F] blur-[125px]" />
      <img
        className="absolute right-0"
        src="./img/bgElements/DeliveryBg/deliveryFlowerTop.png"
        alt="flower"
      />
      <img
        className="absolute left-0 top-[75rem]"
        src="./img/bgElements/DeliveryBg/deliveryFlowerCenter.png"
        alt="flower"
      />
      <div className="delivery_page__wrapper relative container mx-auto z-20">
        <DeliveryTitleBlock />
        <div className="delivery_page__subtitle flex items-center gap-3">
          <p className="text-[100px] text-pink font-normal font-cormorant">!</p>
          <div className="flex flex-col gap-1">
            <h2 className="text-[14px] text-pink font-bold tracking-[.56px] uppercase">
              Дорогие клиенты!
            </h2>
            <p className="max-w-[570px] text-[14px] font-normal tracking-[.56px] uppercase">
              Во время пандемии (COVID-19) компания Lover Flower призывает всех
              меньше контактировать с другими людьми для защиты себя и своих
              близких. Именно поэтому мы организовали
              <span className="text-[14px] text-light-turquoise font-normal tracking-[.56px] uppercase">
                {" "}
                БЕСКОНТАКТНУЮ ДОСТАВКУ
              </span>
            </p>
          </div>
        </div>
        <CardBlocks />
        <DeliveryBlock />
        <AdditionallyBlock />
      </div>
      <img
        className="absolute right-0 -bottom-[15rem] z-10"
        src="./img/bgElements/DeliveryBg/deliveryFlowerFooter.png"
        alt="flower"
      />
      <img
        className="absolute left-[25rem] -rotate-[14.166deg]"
        src="./img/bgElements/DeliveryBg/sign.png"
        alt="lower flower"
      ></img>
      <div className="absolute left-0 -bottom-[10rem] w-[205px] h-[436px] rounded-[436px] bg-[#6B535F] blur-[125px]" />
      <BgColorBottom />
    </div>
  );
};

export default DeliveryPage;
