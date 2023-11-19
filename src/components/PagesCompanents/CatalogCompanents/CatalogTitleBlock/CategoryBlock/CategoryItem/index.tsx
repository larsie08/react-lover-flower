import { FC } from "react";

import classNames from "classnames";

interface CategoryItemProps {
  index: number;
  category: string;
  isSelected: boolean;
  onClick: (index: number, category: string) => void;
}

export const CategoryItem: FC<CategoryItemProps> = ({
  index,
  category,
  isSelected,
  onClick,
}) => {
  return (
    <li
      className={classNames(
        "p-5 border-[0.5px] border-[white] rounded-[40px] text-[12px] font-normal tracking-[0.48px] uppercase cursor-pointer hover:bg-cherry hover:border-cherry hover:text-[white] focus:border-cherry focus active:bg-cherry active:text-[white] active:shadow-[0_0_10px_0_#1B000E_inset]",
        { ["bg-light-turquoise text-[black]"]: isSelected }
      )}
      onClick={() => onClick(index, category)}
    >
      {category}
    </li>
  );
};
