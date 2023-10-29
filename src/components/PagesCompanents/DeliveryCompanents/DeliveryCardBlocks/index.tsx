import { FC } from "react";

const paymentMethods = [
  "БАНКОВСКОЙ КАРТОЙ ПРИ ОФОРМЛЕНИИ ЗАКАЗА ЧЕРЕЗ САЙТ или по ссылке",
  "НАЛИЧНЫМИ,  БАНКОВСКОЙ КАРТОЙ ПРИ САМОВЫВОЗЕ или с расчетного счета орагнизации",
  "НАЛИЧНЫМИ ПРИ ДОСТАВКЕ КУРЬЕРОМ",
  "КРИПТОВАЛЮТОЙ",
];

export const DeliveryCardBlocks: FC = () => {
  return (
    <div className="card_blocks relative z-20">
      <div className="absolute right-[15rem] top-5 w-[345px] h-[220px] -rotate-[71.859deg] rounded-[345px] bg-[#6B535F] blur-[125px]" />
      <div className="absolute left-[15rem] -bottom-[5rem] w-[274px] h-[220px] -rotate-[71.859deg] rounded-[274px] bg-[#6B535F] blur-[125px]" />
      <div className="card_blocks__wrapper flex flex-col gap-5 mt-16">
        <div className="card_block__title">
          <h2 className="title text-[20px] text-pink font-bold tracking-[.8px] uppercase">
            Способы оплаты:
          </h2>
        </div>
        <div className="card_block__content flex justify-evenly">
          {paymentMethods.map((item, i) => (
            <div
              key={i}
              className="card w-[255px] flex flex-col items-center gap-5 p-5 bg-[black]/[.20] rounded-[20px] backdrop-blur-[10px]"
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
              <p className="max-w-[190px] text-center text-[20px] leading-[26px] font-light tracking-[.4px] uppercase">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
