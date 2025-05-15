import { FC } from "react";

import { DecorativeElement, PathBlock, TitlePageBlock } from "../../components";
import {
  CorporateFormBlock,
  CorporateTableBlock,
  CorporateСoopBlock,
} from "./companents";

const titlePathBlock = [
  { text: "Главная", path: "/" },
  { text: "корпоративным клиентам", path: "/corporate" },
];

const TITLE_CLASSNAME =
  "flex items-center lg:ml-20 lg:h-[100px] lg:text-[100px] max-lg:text-[40px] font-normal font-cormorant tracking-[2px] uppercase";
const TITLE_WRAPPER_CLASSNAME = "contacts__title relative z-10 mt-14";

const renderTitleText = () => {
  return (
    <div>
      <h2 className="h-[40px] font-cormorant font-normal uppercase tracking-[0.8px] max-lg:ml-10 max-lg:text-[20px] lg:ml-20 lg:text-[40px]">
        поздравления для
      </h2>
      <h2 className="font-cormorant font-normal uppercase tracking-[0.8px] max-lg:ml-[5rem] max-lg:text-[20px] lg:ml-40 lg:text-[40px]">
        ваших работников
      </h2>
    </div>
  );
};

const CorporatePage: FC = () => {
  return (
    <div className="corporate_page relative bg-[#040A0A] pt-[120px] max-lg:px-4 max-lg:pb-[150px] lg:pb-[200px]">
      <DecorativeElement className="absolute -left-[6rem] top-0 -rotate-[71.859deg] rounded-[275px] bg-[#EA661C] max-lg:h-[220px] max-lg:w-[270px] max-lg:blur-[100px] lg:h-[220px] lg:w-[275px] lg:blur-[125px]" />
      <DecorativeElement className="absolute right-0 top-0 h-[280px] w-[347px] rounded-[275px] bg-[#EA661C] blur-[125px] max-lg:hidden" />
      <picture>
        <source
          srcSet="./img/PagesImg/CorporateImg/adaptiveFlowerLeft.png 640w"
          media="(max-width: 767px)"
        />
        <img
          className="absolute left-0 max-lg:top-[2rem] max-md:h-[120px] max-md:w-[80px] lg:h-[500px] lg:w-[370px]"
          src="./img/PagesImg/CorporateImg/CorporateFlowerTopLeft.png"
          srcSet="./img/PagesImg/CorporateImg/CorporateFlowerTopLeft.png 1280w, ./img/PagesImg/CorporateImg/adaptiveFlowerLeft.png 640w"
          loading="lazy"
          alt="flower"
        />
      </picture>
      <img
        className="absolute right-0 max-lg:h-[200px] max-lg:w-[300px] lg:top-0"
        src="./img/PagesImg/CorporateImg/CorporateFlowerTopRight.png"
        loading="lazy"
        alt="flower"
      />
      <img
        className="absolute left-0 top-[100rem] z-10 max-lg:hidden"
        src="./img/PagesImg/CorporateImg/CorporateFlowerMiddle.png"
        loading="lazy"
        alt="flower"
      />
      <img
        className="absolute left-0 top-[100rem] max-lg:hidden"
        src="./img/PagesImg/CorporateImg/CorporateFlowerMiddleSecond.png"
        loading="lazy"
        alt="flower"
      />
      <div className="corporate_page__wrapper container mx-auto">
        <PathBlock items={titlePathBlock} />

        <TitlePageBlock
          title="Букеты"
          titleClassName={TITLE_CLASSNAME}
          renderTitleText={renderTitleText}
          wrapperClassName={TITLE_WRAPPER_CLASSNAME}
        />

        <div className="max-lg:mt-10 lg:mt-24">
          <h3 className="max-w-[765px] font-light uppercase tracking-[0.8px] max-lg:text-[14px] lg:text-[20px]">
            Если у Вас большое количество сотрудников (или не очень) и вы устали
            помнить о каждом их Дне рождении и как чем поздравить, то{" "}
            <span className="text-light-turquoise">
              мы можем делать это за Вас.
            </span>
          </h3>
        </div>
        <CorporateСoopBlock />
        <CorporateTableBlock />
        <h3 className="font-cormorant font-normal uppercase tracking-[0.8px] max-lg:mt-16 max-lg:text-[14px] lg:mt-48 lg:text-[40px]">
          Если у Вас единичный заказ, то можете выбрать букет в каталоге либо
          заказать индивидуальный букет и указать его стоимость, а при
          оформлении заказа в корзине указать, что оплата будет производиться с
          расчётного счёта организации.
        </h3>
        <CorporateFormBlock />
      </div>
      <DecorativeElement className="absolute rotate-[21.097deg] rounded-[437px] bg-[#EA661C] max-lg:bottom-[-6rem] max-lg:left-[-7rem] max-lg:h-[110px] max-lg:w-[260px] max-lg:blur-[100px] lg:-bottom-[15rem] lg:left-0 lg:h-[437px] lg:w-[206px] lg:blur-[125px]" />
      <DecorativeElement className="absolute right-0 rounded-[300px] bg-[#EA661C] max-lg:h-[200px] max-lg:w-[180px] max-lg:blur-[100px] lg:-bottom-[18rem] lg:h-[400px] lg:w-[320px] lg:blur-[125px]" />
    </div>
  );
};

export default CorporatePage;
