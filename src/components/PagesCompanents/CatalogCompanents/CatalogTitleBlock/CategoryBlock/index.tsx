import { FC } from "react";
import { useSelector } from "react-redux";

import { setCategory } from "../../../../../redux/filter/slice";
import { RootState, useAppDispatch } from "../../../../../redux/store";
import { Category, FlowerCategories } from "../../../../../redux/filter/types";

import { CategoryItem } from "./CategoryItem";

const categories: Category[] = [
  { name: "Букеты из гипсофил", id: FlowerCategories.GypsophilaBouquets },
  { name: "Букеты из ромашек", id: FlowerCategories.ChamomileBouquets },
  { name: "Букеты из хризантем", id: FlowerCategories.ChrysanthemumBouquets },
  {
    name: "Комнатные цветы в горшках",
    id: FlowerCategories.PottedIndoorPlants,
  },
  { name: "Монобукеты", id: FlowerCategories.MonoBouquets },
  { name: "Сборные букеты", id: FlowerCategories.AssortedBouquets },
  { name: "Букет на праздник", id: FlowerCategories.HolidayBouquets },
  { name: "Композиции из цветов", id: FlowerCategories.FlowerCompositions },
  { name: "Конверты", id: FlowerCategories.Envelopes },
  { name: "Открытки", id: FlowerCategories.GreetingCards },
  { name: "Подарки", id: FlowerCategories.Gifts },
  { name: "Букеты из сухоцветов", id: FlowerCategories.DriedFlowerBouquets },
  { name: "Шары", id: FlowerCategories.Balloons },
  { name: "Популярное", id: FlowerCategories.PopularItems },
  { name: "Букеты роз", id: FlowerCategories.RoseBouquets },
  { name: "Цветы на похороны", id: FlowerCategories.FuneralFlowers },
  { name: "Упаковка подарков", id: FlowerCategories.GiftWrapping },
];

export const CategoryBlock: FC = () => {
  const categoryId = useSelector((state: RootState) => state.filter.categoryId);
  const dispatch = useAppDispatch();

  const onClick = (categoryId: FlowerCategories, category: string) => {
    const obj = { categoryId, category };
    dispatch(setCategory(obj));
  };

  return (
    <ul className="category_block flex flex-wrap gap-3 mt-16">
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