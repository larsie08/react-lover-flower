import { FC } from "react";
import { useSelector } from "react-redux";

import { setCategory } from "../../../../../redux/filter/slice";
import { RootState, useAppDispatch } from "../../../../../redux/store";
import {
  Category,
  FlowerCategoriesEnum,
} from "../../../../../redux/filter/types";

import { CategoryItem } from "./CategoryItem";

const categories: Category[] = [
  { name: "Букеты из гипсофил", id: FlowerCategoriesEnum.GypsophilaBouquets },
  { name: "Букеты из ромашек", id: FlowerCategoriesEnum.ChamomileBouquets },
  {
    name: "Букеты из хризантем",
    id: FlowerCategoriesEnum.ChrysanthemumBouquets,
  },
  {
    name: "Комнатные цветы в горшках",
    id: FlowerCategoriesEnum.PottedIndoorPlants,
  },
  { name: "Монобукеты", id: FlowerCategoriesEnum.MonoBouquets },
  { name: "Сборные букеты", id: FlowerCategoriesEnum.AssortedBouquets },
  { name: "Букет на праздник", id: FlowerCategoriesEnum.HolidayBouquets },
  { name: "Композиции из цветов", id: FlowerCategoriesEnum.FlowerCompositions },
  { name: "Конверты", id: FlowerCategoriesEnum.Envelopes },
  { name: "Открытки", id: FlowerCategoriesEnum.GreetingCards },
  { name: "Подарки", id: FlowerCategoriesEnum.Gifts },
  {
    name: "Букеты из сухоцветов",
    id: FlowerCategoriesEnum.DriedFlowerBouquets,
  },
  { name: "Шары", id: FlowerCategoriesEnum.Balloons },
  { name: "Популярное", id: FlowerCategoriesEnum.PopularItems },
  { name: "Букеты роз", id: FlowerCategoriesEnum.RoseBouquets },
  { name: "Цветы на похороны", id: FlowerCategoriesEnum.FuneralFlowers },
  { name: "Упаковка подарков", id: FlowerCategoriesEnum.GiftWrapping },
];

export const CategoryBlock: FC = () => {
  const dispatch = useAppDispatch();
  
  const categoryId = useSelector((state: RootState) => state.filter.categoryId);

  const onClick = (categoryId: FlowerCategoriesEnum, category: string) => {
    const obj = { categoryId, category };
    dispatch(setCategory(obj));
  };

  return (
    <ul className="category_block flex flex-wrap gap-3 mt-16 select-none">
      {categories.map((category, index) => (
        <CategoryItem
          key={index}
          category={category}
          isSelected={categoryId === category.id}
          onClick={onClick}
        />
      ))}
    </ul>
  );
};
