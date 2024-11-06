import { FC, memo } from "react";
import { Link } from "react-router-dom";

import { DecorativeElement } from "../../../DecorativeElement";

import { FlowerCategoriesEnum } from "../../../../redux/filter/types";

type ListBlockProps = {
  id: FlowerCategoriesEnum;
  name: string;
  onClick: (id: FlowerCategoriesEnum, name: string) => void;
};

export const ListBlock: FC<ListBlockProps> = memo(({ id, name, onClick }) => {
  return (
    <Link
      to="catalog"
      onClick={() => onClick(id, name)}
      key={id}
      className="group/categories catalog_name group-[:hover]:opacity-100 opacity-0 text-[14px] font-normal relative z-30 tracking-[.56px] uppercase cursor-pointer hover:text-light-turquoise"
    >
      {name}
      <DecorativeElement className="absolute invisible h-[1px] w-0 bg-light-turquoise group-hover/categories:w-full group-hover/categories:visible transition-all duration-300" />
    </Link>
  );
});
