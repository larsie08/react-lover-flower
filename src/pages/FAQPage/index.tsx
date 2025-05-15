import { FC, useState } from "react";

import { DecorativeElement, PathBlock, TitlePageBlock } from "../../components";
import { FAQBlock } from "./FAQBlock";

const questions = [
  {
    id: 1,
    title:
      "БУДЕТ ЛИ ЗАКАЗАННЫЙ БУКЕТ В ТОЧНОСТИ СООТВЕТСТВОВАТЬ ЕГО ИЗОБРАЖЕНИЮ НА САЙТЕ?",
    content:
      "Букет собирается по индивидуальной матрице букета. Однако возможны случаи, когда нет необходимых цветов либо имеющиеся цветы отличаются от представленных на фото, и с согласования заказчика они могут быть заменены на аналогичные. Либо если флорист считает, что данные изменения не повлекут сильного изменения в образе букета, то самостоятельно может заменить некоторые цветы. И перед отправкой направляется фото заказчику, который утверждает получившийся букет. Каждый цветок отличается от другого, как и каждый букет будет индивидуальным, но в этом и есть его прелесть… в индивидуальности.",
  },
  {
    id: 2,
    title: "КАК ДОЛГО СТОЯТ БУКЕТЫ ИЗ СУХОЦВЕТОВ?",
    content:
      "Букеты из сухоцветов могут стоять длительное время, обычно несколько месяцев или даже годы, при условии правильного ухода. Их долговечность зависит от типа сухоцветов и условий хранения.",
  },
  {
    id: 3,
    title: "ДЕЛАЕТЕ ЛИ ВЫ ФОТО ГОТОВОГО БУКЕТА ПЕРЕД ОТПРАВКОЙ?",
    content:
      "Да, мы делаем фотографии готовых букетов перед отправкой. Это позволяет нам удостовериться, что букет соответствует ожиданиям заказчика, и предоставить ему возможность утвердить окончательный внешний вид букета.",
  },
  {
    id: 4,
    title: "А СКОЛЬКО ДОЛЖНЫ ПРОСТОЯТЬ ЦВЕТЫ В БУКЕТЕ?",
    content:
      "Продолжительность жизни цветов в букете зависит от их типа. Обычно свежие цветы могут простоять от нескольких дней до двух недель при правильном уходе. Регулярная замена воды, обрезка стеблей и удаление увядших листьев помогут продлить их свежесть.",
  },
  {
    id: 5,
    title: "ЕСТЬ ЛИ ДОСТАВКА ЗА ПРЕДЕЛЫ МКАД?",
    content:
      "Да, мы осуществляем доставку за пределы МКАД. Пожалуйста, уточните условия доставки для конкретного адреса при оформлении заказа или свяжитесь с нашим сервисом поддержки.",
  },
  {
    id: 6,
    title: "КАК ОПРЕДЕЛИТЬ СВЕЖИЕ ЛИ ЦВЕТЫ?",
    content:
      "Свежие цветы обычно имеют яркий цвет, упругие стебли и здоровый внешний вид. Избегайте цветов с увядшими лепестками, тусклым оттенком или гнусавым запахом. Также обратите внимание на стебли: они должны быть твердыми, без признаков гнили.",
  },
  {
    id: 7,
    title: "ЧЕМ ОТЛИЧАЕТСЯ БЕЛОРУССКАЯ РОЗА ОТ ИМПОРТНОЙ?",
    content:
      "Белорусская роза часто отличается высоким качеством и стойкостью. Однако различия в вариететах, условиях выращивания и климатических особенностях могут влиять на их внешний вид. Важно выбирать розы в соответствии с предпочтениями и требованиями к конкретному букету.",
  },
];

const titlePathBlock = [
  { text: "Главная", path: "/" },
  { text: "корпоративным клиентам", path: "/corporate" },
];

const TITLE_CLASSNAME =
  "flex items-center lg:ml-10 lg:h-[100px] lg:text-[100px] max-lg:text-[40px] font-normal font-cormorant tracking-[2px] uppercase";
const TITLE_WRAPPER_CLASSNAME =
  "FAQ_page__title flex items-center relative z-10 mt-14 select-none";
const TITLE_DECORATIVE_CLASSNAME =
  "w-[65px] border-t-[1px] border-light-turquoise max-lg:hidden";

const FAQPage: FC = () => {
  const [BlockId, setBlockId] = useState<number | null>(null);

  const onClick = (id: number) => {
    setBlockId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="FAQ_page relative bg-[#040A0A] pt-[120px] max-lg:px-4 max-lg:pb-[150px] lg:pb-[200px]">
      <DecorativeElement className="absolute -left-[10rem] top-0 z-10 select-none rounded-[466px] bg-[#3D5279] blur-[125px] max-lg:h-[220px] max-lg:w-[280px] lg:h-[220px] lg:w-[465px]" />
      <DecorativeElement className="absolute right-0 top-0 h-[220px] w-[328px] select-none rounded-[327px] bg-[#3D5279] blur-[125px] max-lg:hidden" />
      <img
        className="absolute left-0 top-0 select-none"
        src="./img/PagesImg/FAQImg/FAQFlowerLeft.png"
        alt="flower"
      />

      <img
        className="absolute right-0 select-none max-lg:top-[5rem] max-lg:h-[200px] max-lg:w-[150px] lg:top-0"
        src="./img/PagesImg/FAQImg/FAQFlowerRight.png"
        alt="flower"
      />
      <div className="FAQ_page__wrapper container mx-auto">
        <PathBlock items={titlePathBlock} />

        <TitlePageBlock
          title="faq"
          titleClassName={TITLE_CLASSNAME}
          wrapperClassName={TITLE_WRAPPER_CLASSNAME}
          decorativeElementClassName={TITLE_DECORATIVE_CLASSNAME}
        />

        <div className="blocks relative z-20 mt-16 flex flex-col gap-3">
          {questions.map((obj) => (
            <FAQBlock
              key={obj.id}
              title={obj.title}
              content={obj.content}
              isOpen={BlockId === obj.id}
              onClick={() => onClick(obj.id)}
            />
          ))}
        </div>
      </div>
      <DecorativeElement className="absolute -bottom-[4rem] rounded-[466px] bg-[#3D5279] blur-[125px] max-lg:right-6 max-lg:h-[100px] max-lg:w-[250px] max-lg:rotate-[21deg] max-lg:blur-[50px] lg:-left-[12rem] lg:h-[220px] lg:w-[465px]" />
      <DecorativeElement className="absolute -bottom-[10rem] right-0 h-[400px] w-[489px] rounded-[400px] bg-[#3D5279] blur-[125px] max-lg:hidden" />
      {/* <FAQBgBottom /> */}
    </div>
  );
};

export default FAQPage;
