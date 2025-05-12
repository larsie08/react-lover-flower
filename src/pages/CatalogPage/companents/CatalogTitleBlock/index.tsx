import { FC, memo } from "react";

import { Category, FlowerCategoriesEnum } from "../../../../redux/filter/types";

import { CategoryItem } from "./CategoryItem";
import { PathBlock, TitlePageBlock } from "../../../../components";

const titlePathItems = [
  { text: "Главная", path: "/" },
  { text: "Каталог", path: "/catalog" },
];

export const categories: Category[] = [
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
  screenWidth: number;
  onClickCategory: (category: string) => void;
};

const TITLE_CLASSNAME =
  "lg:h-[100px] text-[100px] font-normal font-cormorant tracking-[2px] uppercase max-md:text-[40px]";
const SUBTITLE_CLASSNAME =
  "ml-[270px] lg:h-[100px] text-[100px] font-normal font-cormorant tracking-[2px] uppercase max-md:ml-[4rem] max-md:text-[40px]";

const renderTitleText = () => {
  return (
    <p className="max-w-[430px] text-left break-words whitespace-normal mt-5 lg:ml-[270px] text-[14px] font-normal tracking-[0.56px] uppercase max-md:ml-[4rem]">
      В нашем магазине самый большой выбор букетов для любых событий:
    </p>
  );
};

export const CatalogTitleBlock: FC<TitleBlockProps> = memo(
  ({ categoryId, onClickCategory, screenWidth }) => {
    return (
      <div className="relative z-10">
        <PathBlock
          items={[
            ...titlePathItems,
            ...(categoryId ? [{ text: categoryId, path: "/catalog" }] : []),
          ]}
        />

        <div className="max-w-[950px] mt-5 p-5 lg:bg-[#000]/[0.30] lg:backdrop-blur-[10px] lg:rounded-[20px]">
          <TitlePageBlock
            title="каталог"
            titleClassName={TITLE_CLASSNAME}
            subtitle="букетов"
            subtitleClassName={SUBTITLE_CLASSNAME}
            renderTitleText={renderTitleText}
          />

          {screenWidth > 768 && (
            <ul className="category_block flex flex-wrap gap-3 mt-16 select-none">
              {categories.map((category) => (
                <CategoryItem
                  key={category.name}
                  category={category}
                  isSelectedCategory={categoryId === category.name}
                  onClickCategory={onClickCategory}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
);
