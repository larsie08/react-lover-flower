import { FC, useState } from "react";

import { FAQBlock } from "./FAQBlock";

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

export const FAQBlocks: FC = () => {
  const [BlockId, setBlockId] = useState<number>(NaN);

  const onClick = (id: number) => {
    setBlockId((prevId) => (prevId === id ? NaN : id));
  };

  return (
    <div className="blocks flex flex-col mt-16 gap-3">
      {questions.map((obj, id) => (
        <FAQBlock
          key={id}
          title={obj.title}
          content={obj.content}
          isOpen={BlockId === id}
          onClick={() => onClick(id)}
        />
      ))}
    </div>
  );
};
