import { FC } from "react";
import { DeliveryBlockTitle } from "../DeliveryBlockTitle";

type DeliveryPriceInfoBlockProps = {
  children: React.ReactNode;
  className?: string;
};

export const DeliveryPriceInfoBlock: FC<DeliveryPriceInfoBlockProps> = ({
  children,
  className = "",
}) => {
  return (
    <li
      className={`md:text-[20px] max-md:text-[14px] font-light leading-[26px] tracking-[.4px] uppercase list-disc ${className}`}
    >
      <p className="flex flex-wrap gap-[4px]">{children}</p>
    </li>
  );
};

export const DeliveryInfoBlock: FC = () => {
  return (
    <div className="delivery_block">
      <div className="delivery_block__wrapper">
        <div className="delivery_block__price flex flex-col max-md:px-4 mt-24 md:ml-[10rem] gap-5">
          <DeliveryBlockTitle title="стоимость доставки:" />
          <ul className="content flex flex-col gap-3">
            <DeliveryPriceInfoBlock>
              <span className="font-bold">Бесплатно</span> – при заказе на сумму{" "}
              <span className="text-light-turquoise">от 90 рублей</span>
            </DeliveryPriceInfoBlock>
            <DeliveryPriceInfoBlock>
              <span className="font-bold">10 рублей</span> – при заказе на сумму{" "}
              <span className="text-light-turquoise">менее 90 рублей</span>
            </DeliveryPriceInfoBlock>
            <DeliveryPriceInfoBlock>
              Также вы можете забрать ваш заказ самостоятельно по адресу:{" "}
              <span className="text-light-turquoise">
                г. Минск, ул. Тимирязева д. 67, комн. 112 ежедневно с 10.00 до
                21.00
              </span>
            </DeliveryPriceInfoBlock>
          </ul>
        </div>

        <div className="delivery_block__conditions flex flex-col max-md:px-4 mt-24 gap-5">
          <DeliveryBlockTitle title="Условия доставки:" />
          <ul className="content max-w-[880px] flex flex-col gap-3">
            <DeliveryPriceInfoBlock>
              Доставка осуществляется по городу Минску в пределах МКАД{" "}
              <span className="text-light-turquoise">в любой день</span>
            </DeliveryPriceInfoBlock>
            <DeliveryPriceInfoBlock>
              Возможность, сроки и стоимость доставки за пределы МКАД, доставки
              в ночное время, праздники{" "}
              <span className="text-light-turquoise">
                оговариваются с менеджером
              </span>
            </DeliveryPriceInfoBlock>
          </ul>
        </div>
      </div>
    </div>
  );
};
