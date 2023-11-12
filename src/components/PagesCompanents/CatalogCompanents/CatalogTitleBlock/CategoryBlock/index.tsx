import classNames from "classnames";
import { FC, useState } from "react";

const categories = [
  "Букеты из гипсофил",
  "Букеты из ромашек",
  "Букеты из хризантем",
  "Комнатные цветы в горшках",
  "Монобукеты",
  "Сборные букеты",
  "Букет на праздник",
  "Композиции из цветов",
  "Конверты",
  "Открытки",
  "Подарки",
  "Букеты из сухоцветов",
  "Шары",
  "Популярное",
  "Букеты роз",
  "Цветы на похороны",
  "Упаковка подарков",
];

export const CategoryBlock: FC = () => {
  const [categoryId, setCategoryId] = useState<number>();

  const onClick = (id: number) => {
    setCategoryId(id);
  };

  return (
    <ul className="category_block flex flex-wrap gap-3 mt-16">
      {categories.map((category, index) => (
        <li
          className={classNames(
            "p-5 border-[0.5px] border-[white] rounded-[40px] text-[12px] font-normal tracking-[0.48px] uppercase cursor-pointer",
            { ["bg-light-turquoise text-[black]"]: categoryId === index }
          )}
          onClick={() => onClick(index)}
          key={index}
        >
          {category}
        </li>
      ))}
    </ul>
  );
};
