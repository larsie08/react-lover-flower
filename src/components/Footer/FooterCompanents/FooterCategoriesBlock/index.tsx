import { FC } from "react";
import { Link } from "react-router-dom";

import { Category, FlowerCategoriesEnum } from "../../../../redux/filter/types";

import { DecorativeElement } from "../../..";

interface FooterCategoriesProps {
  category: Category;
  onClick: (id: FlowerCategoriesEnum, name: string) => void;
}

export const FooterCategoriesBlock: FC<FooterCategoriesProps> = ({
  category,
  onClick,
}) => {
  return (
    <li className="flex">
      <Link
        to="catalog"
        onClick={() => onClick(category.id, category.name)}
        className="group/catalog relative text-standart font-light uppercase tracking-[0.48px] cursor-pointer hover:text-light-turquoise transition-colors"
      >
        {category.name}
        <DecorativeElement className="absolute invisible h-[1px] w-0 bg-light-turquoise group-hover/catalog:w-full group-hover/catalog:visible transition-all duration-300" />
      </Link>
    </li>
  );
};
