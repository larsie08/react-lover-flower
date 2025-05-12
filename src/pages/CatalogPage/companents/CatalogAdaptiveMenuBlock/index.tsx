import { FC, memo } from "react";

import { SortType } from "../../../../redux/filter/types";

import { AdaptiveOpenButton } from "./OpenButton";
import { CatalogFilterBlock } from "../CatalogFilterBlock";
import { CatalogSortBlock } from "../CatalogSortByBlock";
import { CategoryItem } from "../CatalogTitleBlock/CategoryItem";

import { categories } from "../CatalogTitleBlock";

type AdaptiveMenuProps = {
  sortValue: SortType;
  blockId: number | null;
  category: string;
  screenWidth: number;
  handleSortValue: (selectedOption: SortType) => void;
  onClickAdaptiveBlock: (id: number) => void;
  onClickCategory: (category: string) => void;
};

type AdaptiveCategoriesBlock = {
  categoryId: string;
  onClickCategory: (categoryId: string) => void;
};

const CategoriesBlock: FC<AdaptiveCategoriesBlock> = ({
  categoryId,
  onClickCategory,
}) => {
  return (
    <ul className="flex flex-wrap gap-3 select-none">
      {categories.map((category) => (
        <CategoryItem
          key={category.name}
          category={category}
          isSelectedCategory={categoryId === category.name}
          onClickCategory={onClickCategory}
        />
      ))}
    </ul>
  );
};

export const CatalogAdaptiveMenuBlock: FC<AdaptiveMenuProps> = memo(
  ({
    sortValue,
    blockId,
    category,
    screenWidth,
    handleSortValue,
    onClickAdaptiveBlock,
    onClickCategory,
  }) => {
    const menuBlocks = [
      {
        label: "фильтр товаров",
        content: <CatalogFilterBlock />,
      },
      {
        label: "сортировка товаров",
        content: (
          <CatalogSortBlock
            adaptiveIsOpen={blockId === 1}
            screenWidth={screenWidth}
            sortValue={sortValue}
            handleSortValue={handleSortValue}
          />
        ),
      },
      {
        label: "Категории",
        content: (
          <CategoriesBlock
            categoryId={category}
            onClickCategory={onClickCategory}
          />
        ),
      },
    ];

    return (
      <div className="flex flex-col gap-3 px-3 mb-[4rem]">
        {menuBlocks.map((block, id) => (
          <AdaptiveOpenButton
            key={block.label}
            textButton={block.label}
            isOpen={blockId === id}
            onClickAdaptiveBlock={() => onClickAdaptiveBlock(id)}
          >
            {block.content}
          </AdaptiveOpenButton>
        ))}
      </div>
    );
  }
);
