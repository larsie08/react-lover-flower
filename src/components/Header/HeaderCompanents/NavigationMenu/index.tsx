import { FC, memo } from "react";
import { Link } from "react-router-dom";

import { Category } from "../../../../redux/filter/types";

import { ListBlock } from "../ListBlock";
import { DecorativeElement } from "../../../DecorativeElement";

type NavigationMenuProps = {
  categories: Category[];
  navLinks: { label: string; url: string }[];
  handleCategorySelect: (category: string) => void;
};

export const NavigationMenu: FC<NavigationMenuProps> = memo(
  ({ categories, navLinks, handleCategorySelect }) => {
    

    return (
      <>
        <Link to="/" className="logo">
          <img src="./img/logo.png" alt="logo" />
        </Link>
        <ul className="navbar flex ml-[70px] items-center gap-12">
          <li className="group catalog-header text-[14px] font-normal tracking-[.56px] relative uppercase py-3">
            <Link
              to="catalog"
              className="group/link hover:text-light-turquoise hover:decoration-light-turquoise cursor-pointer transition-all group-hover:text-light-turquoise"
            >
              Каталог
              <DecorativeElement className="absolute invisible h-[1px] w-0 bg-light-turquoise group-hover/link:w-full group-hover/link:visible transition-all group-hover:w-full group-hover:visible" />
            </Link>
            <ul className="group/submenu absolute group-[:hover]:visible group-[:hover]:opacity-100 opacity-0 -left-4 top-[40px] invisible bg-[grey]/[.3] backdrop-blur-[10px] flex flex-col gap-1 w-[260px] p-2 transition-all z-20">
              {categories.map((category) => (
                <ListBlock
                  key={category.name}
                  name={category.name}
                  handleCategorySelect={handleCategorySelect}
                />
              ))}
            </ul>
          </li>
          {navLinks.map((navItem) => (
            <li
              key={navItem.label}
              className="group/nav text-[14px] font-normal tracking-[.56px] uppercase hover:text-light-turquoise transition-colors"
            >
              <Link to={navItem.url} className="relative">
                {navItem.label}
                <DecorativeElement className="absolute invisible h-[1px] w-0 bg-light-turquoise group-hover/nav:w-full group-hover/nav:visible transition-all" />
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
);
