import { FC } from "react";

const paymentMethods = [
  "БАНКОВСКОЙ КАРТОЙ ПРИ ОФОРМЛЕНИИ ЗАКАЗА ЧЕРЕЗ САЙТ",
  "НАЛИЧНЫМИ ИЛИ БАНКОВСКОЙ КАРТОЙ ПРИ САМОВЫВОЗЕ",
  "НАЛИЧНЫМИ ПРИ ДОСТАВКЕ КУРЬЕРОМ",
  "КРИПТОВАЛЮТОЙ ОНЛАЙН",
];

const BouquetDeliveryBlock: FC = () => {
  return (
    <div className="flex flex-col gap-16 mt-16">
      <div className="flex flex-col gap-5">
        <h1 className="text-pink text-[20px] font-bold tracking-[0.8px] uppercase">
          Способы оплаты:
        </h1>
        <ul className="flex flex-col gap-[10px]">
          {paymentMethods.map((str, id) => (
            <li
              key={id}
              className="ml-6 text-[20px] font-light leading-6 tracking-[0.4px] uppercase list-disc"
            >
              {str}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="text-pink text-[20px] font-bold tracking-[0.8px] uppercase">
          стоимость доставки:
        </h1>
        <ul className="flex flex-col gap-[10px]">
          <li className="ml-6 text-[20px] font-light leading-6 tracking-[0.4px] uppercase list-disc">
            <span className="font-bold">Бесплатно</span> – при заказе на сумму
            <span className="text-light-turquoise"> от 90 рублей</span>
          </li>
          <li className="ml-6 text-[20px] font-light leading-6 tracking-[0.4px] uppercase list-disc">
            <span className="font-bold">10 рублей</span> – при заказе на сумму
            <span className="text-light-turquoise"> менее 90 рублей</span>
          </li>
          <li className="max-w-[747px] ml-6 text-[20px] font-light tracking-[0.4px] uppercase list-disc">
            Возможность, сроки и стоимость доставки за пределы МКАД, доставки в
            ночное время, праздники
            <span className="text-light-turquoise">
              {" "}
              оговариваются с менеджером
            </span>
          </li>
          <li className="max-w-[730px] ml-6 text-[20px] font-light tracking-[0.4px] uppercase list-disc">
            Так же вы можете забрать ваш заказ самостоятельно по адресу:
            <span className="text-light-turquoise">
              {" "}
              г. Минск, ул. Тимирязева д. 67, комн. 112 ежедневно с 10.00 до
              21.00
            </span>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="text-pink text-[20px] font-bold tracking-[0.8px] uppercase">
          Способы оплаты:
        </h1>
        <p className="max-w-[880px] text-[20px] font-light tracking-[0.4px] uppercase list-disc">
          Доставка осуществляется по городу Минску в пределах МКАД
          <span className="text-light-turquoise">
            {" "}
            в любой день с 09.00 до 22.00.
          </span>{" "}
          Доставка в ночное время осуществляется по договоренности с оператором
        </p>
      </div>
    </div>
  );
};

export default BouquetDeliveryBlock;
