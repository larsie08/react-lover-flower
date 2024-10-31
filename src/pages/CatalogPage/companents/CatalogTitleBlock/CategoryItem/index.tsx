import { FC } from "react";
import classNames from "classnames";

import {
  Category,
  FlowerCategoriesEnum,
} from "../../../../../redux/filter/types";

interface CategoryItemProps {
  category: Category;
  isSelected: boolean;
  onClick: (index: FlowerCategoriesEnum, category: string) => void;
}

export const CategoryItem: FC<CategoryItemProps> = ({
  category,
  isSelected,
  onClick,
}) => {
  return (
    <li
      className={classNames(
        "p-5 border-[0.5px] border-[white] rounded-[40px] text-[12px] font-normal tracking-[0.48px] transition-all uppercase cursor-pointer hover:bg-cherry hover:border-cherry hover:text-[white] focus:border-cherry active:bg-cherry active:text-[white] active:shadow-[0_0_10px_0_#1B000E_inset]",
        { ["bg-light-turquoise text-[black]"]: isSelected }
      )}
      onClick={() => onClick(category.id, category.name)}
    >
      {category.name}
    </li>
  );
};
