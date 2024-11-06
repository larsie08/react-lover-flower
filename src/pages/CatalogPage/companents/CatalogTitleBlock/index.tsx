import { FC, memo } from "react";
import { useSelector } from "react-redux";

import { Category, FlowerCategoriesEnum } from "../../../../redux/filter/types";
import { RootState, useAppDispatch } from "../../../../redux/store";
import { setCategory } from "../../../../redux/filter/slice";

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

export const CatalogTitleBlock: FC = memo(() => {
  const dispatch = useAppDispatch();

  const categoryId = useSelector((state: RootState) => state.filter.categoryId);

  const onClick = (categoryId: FlowerCategoriesEnum, category: string) => {
    const obj = { categoryId, category };
    dispatch(setCategory(obj));
  };

  return (
    <div className="relative z-10">
      <div className="catalog__path">
        <h3 className="text-[12px] font-normal tracking-[.48px] uppercase">
          Главная / Каталог
        </h3>
      </div>
      <div className="max-w-[950px] mt-5 p-5 bg-[#000]/[0.30] backdrop-blur-[10px] rounded-[20px]">
        <div className="catalog__title relative z-10">
          <h1 className="flex items-center  h-[100px] text-[100px] font-normal font-cormorant tracking-[2px] uppercase">
            каталог
          </h1>
          <h1 className="flex items-center ml-[270px] h-[100px] text-[100px] font-normal font-cormorant tracking-[2px] uppercase">
            букетов
          </h1>
          <h2 className="subtitle max-w-[430px] mt-5 ml-[270px] text-[14px] font-normal tracking-[0.56px] uppercase">
            В нашем магазине самый большой выбор букетов для любых событий:
          </h2>
        </div>
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
      </div>
    </div>
  );
});
