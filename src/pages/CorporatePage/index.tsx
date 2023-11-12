import { FC } from "react";

import {
  CorporateFormBlock,
  CorporateTableBlock,
  CorporateTitleBlock,
  CorporateСoopBlock,
  DecorativeElement,
} from "../../components";
import { CorporateBgColor } from "../../assets";

const CorporatePage: FC = () => {
  return (
    <div className="corporate_page relative pt-[120px] h-[3800px] bg-[#040A0A]">
      <DecorativeElement className="absolute w-[275px] h-[220px] top-0 -left-[6rem] -rotate-[71.859deg] rounded-[275px] bg-[#EA661C] blur-[125px]" />
      <img
        className="absolute top-0"
        src="./img/bgElements/CorporateBg/CorporateFlowerTopLeft.png"
      />
      <DecorativeElement className="absolute w-[347px] h-[280px] top-0 right-0 rounded-[275px] bg-[#EA661C] blur-[125px]" />
      <img
        className="absolute top-0 right-0"
        src="./img/bgElements/CorporateBg/CorporateFlowerTopRight.png"
      />
      <img
        className="absolute top-[100rem] left-0 z-10"
        src="./img/bgElements/CorporateBg/CorporateFlowerMiddle.png"
      />
      <img
        className="absolute top-[100rem] left-0"
        src="./img/bgElements/CorporateBg/CorporateFlowerMiddleSecond.png"
      />
      <div className="corporate_page__wrapper container mx-auto">
        <CorporateTitleBlock />
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
