import { FC, memo } from "react";

import { Category, FlowerCategoriesEnum } from "../../../../redux/filter/types";

import { CategoryItem } from "./CategoryItem";
import { PathBlock } from "../../../../components";

const titlePathItems = [
  { text: "Главная", path: "/" },
  { text: "Каталог", path: "/catalog" },
];

const categories: Category[] = [
  { name: FlowerCategoriesEnum.GypsophilaBouquets },
  { name: FlowerCategoriesEnum.ChamomileBouquets },
  {
    name: FlowerCategoriesEnum.ChrysanthemumBouquets,
  },
  {
    name: FlowerCategoriesEnum.PottedIndoorPlants,
  },
  { name: FlowerCategoriesEnum.MonoBouquets },
  { name: FlowerCategoriesEnum.AssortedBouquets },
  { name: FlowerCategoriesEnum.HolidayBouquets },
  { name: FlowerCategoriesEnum.FlowerCompositions },
  { name: FlowerCategoriesEnum.Envelopes },
  { name: FlowerCategoriesEnum.GreetingCards },
  { name: FlowerCategoriesEnum.Gifts },
  {
    name: FlowerCategoriesEnum.DriedFlowerBouquets,
  },
  { name: FlowerCategoriesEnum.Balloons },
  { name: FlowerCategoriesEnum.PopularItems },
  { name: FlowerCategoriesEnum.RoseBouquets },
  { name: FlowerCategoriesEnum.FuneralFlowers },
  { name: FlowerCategoriesEnum.GiftWrapping },
];

type TitleBlockProps = {
  categoryId: string;
  onClick: (category: string) => void;
};

export const CatalogTitleBlock: FC<TitleBlockProps> = memo(
  ({ categoryId, onClick }) => {
    return (
      <div className="relative z-10">
        <PathBlock
          items={[
            ...titlePathItems,
            ...(categoryId ? [{ text: categoryId, path: "/catalog" }] : []),
          ]}
        />

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
            {categories.map((category) => (
              <CategoryItem
                key={category.name}
                category={category}
                isSelected={categoryId === category.name}
                onClick={onClick}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
);
