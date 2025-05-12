import { FC, memo } from "react";
import classNames from "classnames";

import { Category } from "../../../../../redux/filter/types";

type CategoryItemProps = {
  category: Category;
  isSelectedCategory: boolean;
  onClickCategory: (categoryId: string) => void;
};

export const CategoryItem: FC<CategoryItemProps> = memo(
  ({ category, isSelectedCategory, onClickCategory }) => {
    return (
      <li
        className={classNames(
          "lg:p-5 max-lg:p-3 border-[0.5px] border-[white] rounded-[40px] text-[12px] font-normal tracking-[0.48px] transition-all uppercase cursor-pointer hover:bg-cherry hover:border-cherry hover:text-[white] focus:border-cherry active:bg-cherry active:text-[white] active:shadow-[0_0_10px_0_#1B000E_inset]",
          { ["bg-light-turquoise text-[black]"]: isSelectedCategory }
        )}
        onClick={() => onClickCategory(category.name)}
      >
        {category.name}
      </li>
    );
  }
);
