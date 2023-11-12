import { FC, useState } from "react";

import classNames from "classnames";

import { DecorativeElement, FAQTitleBlock } from "../../components";
import { FAQBgBottom } from "../../assets";

const questions = [
  {
    title:
      "БУДЕТ ЛИ ЗАКАЗАННЫЙ БУКЕТ В ТОЧНОСТИ СООТВЕТСТВОВАТЬ ЕГО ИЗОБРАЖЕНИЮ НА САЙТЕ?",
    content: `Букет собирается по индивидуальной матрице букета. 
    Однако возможны случаи, когда нет необходимых цветов либо имеющиеся цветы отличаются от представленных на фото, 
    и с согласования заказчика они могут быть заменены на аналогичные. 
    Либо если флорист считает, что данные изменения не повлекут сильного изменения в образе букета, 
    то самостоятельно может заменить некоторые цветы. 
    И перед отправкой направляется фото заказчику, который утверждает получившийся букет. 
    Каждый цветок отличается от другого, как и каждый букет будет индивидуальным, 
    но в этом и есть его прелесть… в индивидуальности.`,
  },
  {
    title: "КАК ДОЛГО СТОЯТ БУКЕТЫ ИЗ СУХОЦВЕТОВ?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, iure?",
  },
  {
    title: "ДЕЛАЕТЕ ЛИ ВЫ ФОТО ГОТОВОГО БУКЕТА ПЕРЕД ОТПРАВКОЙ?",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, doloribus.",
  },
  {
    title: "А СКОЛЬКО ДОЛЖНЫ ПРОСТОЯТЬ ЦВЕТЫ В БУКЕТЕ?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, eos?",
  },
  {
    title: "ЕСТЬ ЛИ ДОСТАВКА ЗА ПРЕДЕЛЫ МКАД?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, accusantium!",
  },
  {
    title: "КАК ОПРЕДЕЛИТЬ СВЕЖИЕ ЛИ ЦВЕТЫ?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, consequatur.",
  },
  {
    title: "ЧЕМ ОТЛИЧАЕТСЯ БЕЛОРУССКАЯ РОЗА ОТ ИМПОРТНОЙ?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, veritatis.",
  },
];

const FAQPage: FC = () => {
  const [BlockId, setBlockId] = useState<number>();

  const onClick = (id: number) => {
    setBlockId(id);
  };

  return (
    <div className="FAQ_page relative pt-[120px] h-[1400px] bg-[#040A0A]">
      <DecorativeElement className="absolute w-[465px] h-[220px] top-0 -left-[10rem] bg-[#3D5279] rounded-[466px] blur-[125px]" />
      <DecorativeElement className="absolute w-[328px] h-[220px] top-0 right-0 bg-[#3D5279] rounded-[327px] blur-[125px]" />
      <img
        className="absolute top-0 left-0"
        src="./img/bgElements/FAQBg/FAQFlowerLeft.png"
        alt="flower"
      />
      <img
        className="absolute top-0 right-0"
        src="./img/bgElements/FAQBg/FAQFlowerRight.png"
        alt="flower"
      />
      <div className="FAQ_page__wrapper container mx-auto">
        <FAQTitleBlock />
        <div className="blocks flex flex-col mt-16 gap-3">
          {questions.map((obj, id) => (
            <div
              key={id}
              className="w-[825px] pb-5 px-5 flex flex-col border border-light-turquoise"
            >
              <div className="title h-[70px] flex items-center justify-between">
                <h1 className="text-center text-[20px] text-light-turquoise font-normal uppercase">
                  {obj.title}
                </h1>
                <h2
                  onClick={() => onClick(id)}
                  className="flex h-[70px] w-[15px] text-[40px] text-light-turquoise font-extralight cursor-pointer"
                >
                  {BlockId === id ? "-" : "+"}
                </h2>
              </div>

              <p
                className={classNames(
                  "h-full text-[20px] font-light transition-all",
                  {
                    ["hidden"]: BlockId !== id,
                  }
                )}
              >
                {obj.content}
              </p>
            </div>
          ))}
        </div>
      </div>
      <DecorativeElement className="absolute w-[465px] h-[220px] -bottom-[4rem] -left-[12rem] bg-[#3D5279] rounded-[466px] blur-[125px]" />
      <FAQBgBottom />
    </div>
  );
};

export default FAQPage;
