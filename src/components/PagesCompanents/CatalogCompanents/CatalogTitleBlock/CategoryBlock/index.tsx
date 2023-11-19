import { FC } from "react";

import { setCategory } from "../../../../../redux/filter/slice";
import { useAppDispatch } from "../../../../../redux/store";
import { useSelector } from "react-redux";
import { selectCategoryId } from "../../../../../redux/filter/selectors";

import { CategoryItem } from "./CategoryItem";

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
  const categoryId = useSelector(selectCategoryId);
  const dispatch = useAppDispatch();

  const onClick = (index: number, category: string) => {
    const obj = { categoryId: index, category };
    dispatch(setCategory(obj));
  };

  return (
    <ul className="category_block flex flex-wrap gap-3 mt-16">
      {categories.map((category, index) => (
        <CategoryItem
          key={index}
          index={index}
          category={category}
          isSelected={categoryId === index}
          onClick={onClick}
        />
      ))}
    </ul>
  );
};
