import { FC } from "react";
import { DecorativeElement } from "../../../../components/DecorativeElement";
import { DeliveryBlockTitle } from "../DeliveryBlockTitle";

export const DeliveryAdditionallyBlock: FC = () => {
  return (
    <div className="additionally_block relative">
      <DecorativeElement className="absolute right-0 md:top-0 max-md:top-[20rem] md:w-[538px] md:h-[431px] max-md:w-[250px] max-md:h-[260px] md:-rotate-[71.859deg] rounded-[537px] bg-[#6B535F] blur-[125px]" />
      <div className="additionally_block__wrapper md:w-[970px] container mx-auto flex flex-col gap-8 mt-24 p-5 bg-[black]/[.20] backdrop-blur-[10px] rounded-[20px]">
        <div className="additionally_block__content flex flex-col gap-5 z-20">
          <DeliveryBlockTitle title="Дополнительно:" />

          <div className="content">
            <p className="md:text-[20px] max-md:text-[14px] font-light tracking-[.8px]">
              Доставка иному лицу возможна только в случае оплаты заказа
              заказчиком. Доставка осуществляется не ранее чем через 2 часа
              после оплаты заказа, но может быть ранее, если букет есть в
              наличии либо по договорённости с менеджером.
            </p>
            <p className="md:text-[20px] max-md:text-[14px] font-light tracking-[.8px]">
              Время ожидания курьера составляет 15 минут.
            </p>
            <div>
              <p className="md:text-[20px] max-md:text-[14px] font-light tracking-[.8px]">
                В случае если на момент доставки цветов получателя нет либо нет
                возможности по иным причинам произвести доставку (указан
                неточный адрес, закрытая входная дверь, контрольно-пропускная
                система и др.), мы оставляем за собой право по собственному
                выбору:
              </p>
              <ul className="ml-10">
                <li className="md:text-[20px] max-md:text-[14px] font-light tracking-[.8px] list-disc">
                  оставить цветы тому, кто открыл дверь;
                </li>
                <li className="md:text-[20px] max-md:text-[14px] font-light tracking-[.8px] list-disc">
                  с заказчиком согласовать повторную доставку, которая
                  дополнительно оплачивается;
                </li>
                <li className="md:text-[20px] max-md:text-[14px] font-light tracking-[.8px] list-disc">
                  отказаться от передачи цветов без возврата денежных средств.
                </li>
              </ul>
            </div>
            <p className="md:text-[20px] max-md:text-[14px] font-light tracking-[.8px] max-w-[870px] mt-8">
              Если вы либо иной получатель не получили заказ, вам необходимо
              сообщить об этом менеджеру по телефону
              <span className="text-light-turquoise"> +375 29 113 69 69</span>.
            </p>
          </div>
        </div>
        <div className="additionally_block__refund flex flex-col gap-5">
          <DeliveryBlockTitle title="Возврат денег:" />

          <div className="content flex flex-col gap-8">
            <p className="md:text-[20px] max-md:text-[14px] font-light tracking-[.8px]">
              При отказе заказчика от заказа в течение двух часов, если заказ
              ещё не начал готовиться, средства возвращаются в полном объёме.
              Если же флорист начал подготовку, то заказчик имеет право на
              возврат 50% стоимости, либо, если ещё не был оплачен, то обязан
              оплатить 50%.
            </p>
            <p className="md:text-[20px] max-md:text-[14px] font-light tracking-[.8px]">
              Цветы надлежащего качества возврату и обмену не подлежат, а если
              имеются какие-либо недостатки в цветах – возврат производится лишь
              если эти недостатки не являются природными и естественными
              изъянами растения. Возврат денежных средств производится
              незамедлительно на тот счёт, с которого произошла оплата, их же
              поступление на счёт зависит от платёжной системы.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
