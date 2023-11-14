import { FC } from "react";

import { setCategory } from "../../../../../redux/filter/slice";
import { RootState, useAppDispatch } from "../../../../../redux/store";
import { useSelector } from "react-redux";

import classNames from "classnames";

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
  const categoryId = useSelector((state: RootState) => state.filter.categoryId);
  const dispatch = useAppDispatch();

  const onClick = (categoryId: number, category: string) => {
    const obj = { categoryId, category };
    dispatch(setCategory(obj));
  };

  return (
    <ul className="category_block flex flex-wrap gap-3 mt-16">
      {categories.map((category, index) => (
        <li
          className={classNames(
            "p-5 border-[0.5px] border-[white] rounded-[40px] text-[12px] font-normal tracking-[0.48px] uppercase cursor-pointer hover:bg-cherry hover:border-cherry hover:text-[white] focus:border-cherry focus active:bg-cherry active:text-[white] active:shadow-[0_0_10px_0_#1B000E_inset]",
            { ["bg-light-turquoise text-[black]"]: categoryId === index }
          )}
          onClick={() => onClick(index, category)}
          key={index}
        >
          {category}
        </li>
      ))}
    </ul>
  );
};
