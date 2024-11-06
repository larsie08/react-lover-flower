import { FC } from "react";

export const CorporateTableBlock: FC = () => {
  return (
    <div className="corporate_page__table mt-24">
      <div className="table__top max-w-[1100px]">
        <h2 className="title text-[40px] font-normal font-cormorant tracking-[0.8px] uppercase">
          Букеты могут изготавливаться в фирменном цвете организации и есть
          возможность делать поздравления на Вашей фирменной открытке, которую
          мы можем изготовить сами.
        </h2>
        <h3 className="subtitle mt-5 text-[20px] text-light-turquoise font-normal tracking-[0.8px] uppercase">
          Стоимость одного букета не менее 60 рублей.
        </h3>
      </div>
      <div className="flex justify-center gap-7 mt-16 relative z-20">
        <div className="absolute -top-12 w-[220px] h-[667px] rotate-[111.267deg] rounded-[670px] bg-[#EA661C] blur-[125px]" />
        <ul className="table__left flex flex-col items-center gap-3 w-[540px]">
          <li className="w-full h-[60px] text-[20px] text-center p-3 text-light-turquoise font-normal tracking-[0.8px] uppercase bg-[black]/[0.20] backdrop-blur-[10px]">
            Количество заявок в месяц
          </li>
          <li className="w-full h-[80px] text-[20px] flex justify-center items-center p-3 font-normal tracking-[0.8px] uppercase bg-[black]/[0.20] backdrop-blur-[10px]">
            1-2
          </li>
          <li className="w-full h-[80px] text-[20px] flex justify-center items-center p-3 font-normal tracking-[0.8px] uppercase bg-[black]/[0.20] backdrop-blur-[10px]">
            3-10
          </li>
          <li className="w-full h-[110px] text-[20px] flex justify-center items-center p-3 font-normal tracking-[0.8px] uppercase bg-[black]/[0.20] backdrop-blur-[10px]">
            Более 10
          </li>
        </ul>
        <ul className="table__right flex flex-col gap-3 max-w-[540px]">
          <li className="text-[20px] h-[60px] p-3 text-light-turquoise text-center font-normal tracking-[0.8px] uppercase bg-[black]/[0.20] backdrop-blur-[10px]">
            Приятные бонусы
          </li>
          <li className="text-[20px] h-[80px] p-3 font-normal tracking-[0.8px] uppercase bg-[black]/[0.20] backdrop-blur-[10px]">
            Стоимость одной доставки по Минску – 10 рублей, за пределы МКАД – от
            20 рублей
          </li>
          <li className="text-[20px] h-[80px] p-3 font-normal tracking-[0.8px] uppercase bg-[black]/[0.20] backdrop-blur-[10px]">
            <p>Доставка бесплатно</p>
            <p>Букет-подарок руководителю в его День рождения</p>
          </li>
          <li className="text-[20px] h-[110px] p-3 font-normal tracking-[0.8px] uppercase bg-[black]/[0.20] backdrop-blur-[10px]">
            <p>Доставка бесплатно</p>
            <p>
              Букет-подарок руководителю в его День рождения Праздничная ель
              перед Новым годом
            </p>
          </li>
        </ul>
      </div>
      <div className="corporate_page__stages relative z-20 flex flex-col ml-[49rem] mt-24">
        <h3 className="text-[40px] text-light-turquoise font-cormorant font-normal tracking-[0.8px] uppercase">
          этапы работы:
        </h3>
        <div className="border-t-[1px] border-light-turquoise w-[60px] mt-10" />
        <ul className="mt-5 ml-4 text-[20px] font-normal tracking-[0.8px] uppercase list-decimal">
          <li>Заполнение заявки</li>
          <li>Подписание договора</li>
          <li>Вручение цветов</li>
          <li>Отчет о доставленных заказах</li>
          <li>оплата</li>
        </ul>
      </div>
    </div>
  );
};
