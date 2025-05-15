import { FC } from "react";
import { DecorativeElement } from "../../../../components";

const stageWork = [
  "Заполнение заявки",
  "Подписание договора",
  "Вручение цветов",
  "Отчет о доставленных заказах",
  "оплата",
];

export const CorporateTableBlock: FC = () => {
  return (
    <div className="corporate_page__table max-lg:mt-10 lg:mt-24">
      <div className="table__top max-lg:flex max-lg:flex-col max-lg:items-end lg:max-w-[1100px]">
        <h2 className="title font-cormorant font-normal uppercase tracking-[0.8px] max-lg:max-w-[255px] max-lg:text-[20px] lg:text-[40px]">
          Букеты могут изготавливаться в фирменном цвете организации и есть
          возможность делать поздравления на Вашей фирменной открытке, которую
          мы можем изготовить сами.
        </h2>
        <h3 className="subtitle mt-5 font-normal uppercase tracking-[0.8px] text-light-turquoise max-lg:max-w-[255px] max-lg:text-[14px] lg:text-[20px]">
          Стоимость одного букета не менее 60 рублей.
        </h3>
      </div>
      <div className="relative z-20 mt-16 flex justify-center gap-7">
        <DecorativeElement className="absolute lg:-top-12 max-lg:top-[7rem] lg:h-[667px] lg:w-[220px] max-lg:h-[130px] max-lg:w-[400px] lg:rotate-[111.267deg] max-lg:rotate-[-72deg] rounded-[670px] bg-[#EA661C] max-lg:blur-[100px] lg:blur-[125px]" />

        <ul className="table__left flex w-[540px] flex-col items-center gap-3">
          <li className="h-[60px] w-full bg-[black]/[0.20] p-3 text-center font-normal uppercase tracking-[0.8px] text-light-turquoise backdrop-blur-[10px] max-lg:text-[14px] lg:text-[20px]">
            Количество заявок в месяц
          </li>
          <li className="flex w-full items-center justify-center bg-[black]/[0.20] p-3 font-normal uppercase tracking-[0.8px] backdrop-blur-[10px] max-lg:h-[100px] max-lg:text-[14px] lg:h-[80px] lg:text-[20px]">
            1-2
          </li>
          <li className="flex w-full items-center justify-center bg-[black]/[0.20] p-3 font-normal uppercase tracking-[0.8px] backdrop-blur-[10px] max-lg:h-[100px] max-lg:text-[14px] lg:h-[80px] lg:text-[20px]">
            3-10
          </li>
          <li className="flex w-full items-center justify-center bg-[black]/[0.20] p-3 font-normal uppercase tracking-[0.8px] backdrop-blur-[10px] max-lg:h-[150px] max-lg:text-[14px] lg:h-[110px] lg:text-[20px]">
            Более 10
          </li>
        </ul>
        <ul className="table__right flex max-w-[540px] flex-col gap-3">
          <li className="h-[60px] bg-[black]/[0.20] p-3 text-center font-normal uppercase tracking-[0.8px] text-light-turquoise backdrop-blur-[10px] max-lg:text-[14px] lg:text-[20px]">
            Приятные бонусы
          </li>
          <li className="bg-[black]/[0.20] p-3 font-normal uppercase tracking-[0.8px] backdrop-blur-[10px] max-lg:h-[100px] max-lg:text-[14px] lg:h-[80px] lg:text-[20px]">
            Стоимость одной доставки по Минску – 10 рублей, за пределы МКАД – от
            20 рублей
          </li>
          <li className="bg-[black]/[0.20] p-3 font-normal uppercase tracking-[0.8px] backdrop-blur-[10px] max-lg:h-[100px] max-lg:text-[14px] lg:h-[80px] lg:text-[20px]">
            <p>Доставка бесплатно</p>
            <p>Букет-подарок руководителю в его День рождения</p>
          </li>
          <li className="bg-[black]/[0.20] p-3 font-normal uppercase tracking-[0.8px] backdrop-blur-[10px] max-lg:h-[150px] max-lg:text-[14px] lg:h-[110px] lg:text-[20px]">
            <p>Доставка бесплатно</p>
            <p>
              Букет-подарок руководителю в его День рождения Праздничная ель
              перед Новым годом
            </p>
          </li>
        </ul>
      </div>
      <div className="corporate_page__stages relative z-20 flex flex-col max-lg:mt-16 lg:ml-[49rem] lg:mt-24">
        <h3 className="font-cormorant font-normal uppercase tracking-[0.8px] text-light-turquoise max-lg:text-[20px] lg:text-[40px]">
          этапы работы:
        </h3>
        <div className="border-t-[1px] border-light-turquoise max-lg:mt-5 max-lg:w-[45px] lg:mt-10 lg:w-[60px]" />
        <ul className="ml-4 mt-5 list-decimal font-normal uppercase tracking-[0.8px] max-lg:text-[14px] lg:text-[20px]">
          {stageWork.map((stage) => (
            <li>{stage}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
