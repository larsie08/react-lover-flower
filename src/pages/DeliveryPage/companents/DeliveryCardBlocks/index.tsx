import { FC } from "react";

import { DecorativeElement } from "../../../../components/DecorativeElement";
import { DeliveryBlockTitle } from "../DeliveryBlockTitle";

const paymentMethods = [
  "БАНКОВСКОЙ КАРТОЙ ПРИ ОФОРМЛЕНИИ ЗАКАЗА ЧЕРЕЗ САЙТ или по ссылке",
  "НАЛИЧНЫМИ,  БАНКОВСКОЙ КАРТОЙ ПРИ САМОВЫВОЗЕ или с расчетного счета орагнизации",
  "НАЛИЧНЫМИ ПРИ ДОСТАВКЕ КУРЬЕРОМ",
  "КРИПТОВАЛЮТОЙ",
];

export const DeliveryCardBlocks: FC = () => {
  return (
    <div className="card_blocks relative">
      <DecorativeElement className="absolute md:right-[15rem] max-md:right-0 md:top-5 max-md:top-[7rem] md:w-[345px] md:h-[220px] max-md:w-[270px] max-md:h-[220px] md:-rotate-[71.859deg] rounded-[345px] bg-[#6B535F] md:blur-[125px] max-md:blur-[100px]" />
      <DecorativeElement className="absolute md:left-[15rem] max-md:right-0 md:-bottom-[5rem] max-md:bottom-[3rem] md:w-[274px] md:h-[220px] max-md:w-[300px] max-md:h-[220px] md:-rotate-[71.859deg] rounded-[274px] bg-[#6B535F] blur-[125px] max-md:blur-[100px]" />
      <div className="card_blocks__wrapper flex flex-col max-md:items-center gap-5 mt-16">
        <DeliveryBlockTitle title="Способы оплаты:" />

        <div className="card_block__content flex max-md:flex-col max-md:gap-5 justify-evenly z-20">
          {paymentMethods.map((item, i) => (
            <div
              key={i}
              className="card md:w-[255px] max-md:w-[200px] max-md:h-[185px] flex flex-col items-center gap-5 p-5 bg-[black]/[.20] rounded-[20px] backdrop-blur-[10px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
              >
                <circle cx="5.5" cy="5.5" r="5.5" fill="#6B535F" />
              </svg>
              <p className="max-w-[190px] text-center md:text-[20px] max-md:text-[14px] leading-[26px] font-light tracking-[.4px] uppercase">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
