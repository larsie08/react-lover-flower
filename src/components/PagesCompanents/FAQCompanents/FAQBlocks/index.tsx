import { FC, useState } from "react";

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

export const FAQBlocks: FC = () => {
  const [BlockId, setBlockId] = useState<number | null>(null);

  const onClick = (id: number) => {
    setBlockId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="blocks flex flex-col mt-16 gap-3">
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
  );
};
