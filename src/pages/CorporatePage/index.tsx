import { FC } from "react";

import { DecorativeElement, PathBlock } from "../../components";
import {
  CorporateFormBlock,
  CorporateTableBlock,
  CorporateСoopBlock,
} from "./companents";

import { CorporateBgColor } from "../../assets";

const titlePathBlock = [
  { text: "Главная", path: "/" },
  { text: "корпоративным клиентам", path: "/corporate" },
];

const CorporatePage: FC = () => {
  return (
    <div className="corporate_page relative pt-[120px] h-[3800px] bg-[#040A0A]">
      <DecorativeElement className="absolute w-[275px] h-[220px] top-0 -left-[6rem] -rotate-[71.859deg] rounded-[275px] bg-[#EA661C] blur-[125px]" />
      <img
        className="absolute top-0"
        src="./img/PagesImg/CorporateImg/CorporateFlowerTopLeft.png"
      />
      <DecorativeElement className="absolute w-[347px] h-[280px] top-0 right-0 rounded-[275px] bg-[#EA661C] blur-[125px]" />
      <img
        className="absolute top-0 right-0"
        src="./img/PagesImg/CorporateImg/CorporateFlowerTopRight.png"
      />
      <img
        className="absolute top-[100rem] left-0 z-10"
        src="./img/PagesImg/CorporateImg/CorporateFlowerMiddle.png"
      />
      <img
        className="absolute top-[100rem] left-0"
        src="./img/PagesImg/CorporateImg/CorporateFlowerMiddleSecond.png"
      />
      <div className="corporate_page__wrapper container mx-auto">
        <PathBlock items={titlePathBlock} />
        <div className="contacts__title relative z-10 mt-14">
          <h1 className="flex items-center ml-20 h-[100px] text-[100px] font-normal font-cormorant tracking-[2px] uppercase">
            Букеты
          </h1>
          <div>
            <h2 className="h-[40px] text-[40px] ml-20 font-normal font-cormorant tracking-[0.8px] uppercase">
              поздравления для
            </h2>
            <h2 className="text-[40px] ml-40 font-normal font-cormorant tracking-[0.8px] uppercase">
              ваших работников
            </h2>
          </div>
        </div>
        <div className="mt-24">
          <h3 className="max-w-[765px] text-[20px] font-light tracking-[0.8px] uppercase">
            Если у Вас большое количество сотрудников (или не очень) и вы устали
            помнить о каждом их Дне рождении и как чем поздравить, то{" "}
            <span className="text-light-turquoise">
              мы можем делать это за Вас.
            </span>
          </h3>
        </div>
        <CorporateСoopBlock />
        <CorporateTableBlock />
        <h3 className="mt-48 text-[40px] font-normal font-cormorant tracking-[0.8px] uppercase">
          Если у Вас единичный заказ, то можете выбрать букет в каталоге либо
          заказать индивидуальный букет и указать его стоимость, а при
          оформлении заказа в корзине указать, что оплата будет производиться с
          расчётного счёта организации.
        </h3>
        <CorporateFormBlock />
      </div>
      <DecorativeElement className="absolute w-[206px] h-[437px] -bottom-[15rem] left-0 rotate-[21.097deg] rounded-[437px] bg-[#EA661C] blur-[125px]" />
      <CorporateBgColor />
    </div>
  );
};

export default CorporatePage;
