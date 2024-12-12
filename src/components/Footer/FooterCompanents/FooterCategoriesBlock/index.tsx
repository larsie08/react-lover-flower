import { FC, memo } from "react";
import { Link } from "react-router-dom";

import { Category } from "../../../../redux/filter/types";

import { DecorativeElement } from "../../..";

interface FooterCategoriesProps {
  category: Category;
  onClick: (name: string) => void;
}

export const FooterCategoriesBlock: FC<FooterCategoriesProps> = memo(
  ({ category, onClick }) => {
    return (
      <li className="max-sm:hidden sm:flex">
        <Link
          to="catalog"
          onClick={() => onClick(category.name)}
          className="group/catalog relative text-standart font-light uppercase tracking-[0.48px] cursor-pointer hover:text-light-turquoise transition-colors"
        >
          {category.name}
          <DecorativeElement className="absolute invisible h-[1px] w-0 bg-light-turquoise group-hover/catalog:w-full group-hover/catalog:visible transition-all duration-300" />
        </Link>
      </li>
    );
  }
);
