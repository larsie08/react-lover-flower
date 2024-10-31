import { FC } from "react";

export const DeliveryBlock: FC = () => {
  return (
    <div className="delivery_block">
      <div className="delivery_block__wrapper">
        <div className="delivery_block__price flex flex-col mt-24 ml-[10rem] gap-5">
          <h1 className="title text-pink text-[20px] font-bold tracking-[.8px] uppercase">
            стоимость доставки:
          </h1>
          <ul className="content flex flex-col gap-3">
            <li className="text-[20px] font-light leading-[26px] tracking-[.4px] uppercase list-disc">
              <span className="font-bold">Бесплатно</span> – при заказе на сумму
              <span className="text-light-turquoise"> от 90 рублей</span>
            </li>
            <li className="text-[20px] font-light leading-[26px] tracking-[.4px] uppercase list-disc">
              <span className="font-bold">10 рублей</span> – при заказе на сумму
              <span className="text-light-turquoise"> менее 90 рублей</span>
            </li>
            <li className="max-w-[670px] font-light text-[20px] leading-[26px] tracking-[.4px] uppercase list-disc">
              Так же вы можете забрать ваш заказ самостоятельно по адресу:
              <span className="text-light-turquoise">
                {" "}
                г. Минск, ул. Тимирязева д. 67, комн. 112 ежедневно с 10.00 до
                21.00
              </span>
            </li>
          </ul>
        </div>
        <div className="delivery_block__conditions flex flex-col mt-24 gap-5">
          <h1 className="title text-pink text-[20px] font-bold tracking-[.8px] uppercase">
            Условия доставки:
          </h1>
          <ul className="content max-w-[880px]">
            <li className="text-[20px] font-light tracking-[0.4px] uppercase list-disc">
              Доставка осуществляется по городу Минску в пределах МКАД
              <span className="text-light-turquoise"> в любой день</span>
            </li>
            <li className="text-[20px] font-light tracking-[0.4px] uppercase list-disc">
              Возможность, сроки и стоимость доставки за пределы МКАД, доставки
              в ночное время, праздники
              <span className="text-light-turquoise">
                {" "}
                оговариваются с менеджером
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
