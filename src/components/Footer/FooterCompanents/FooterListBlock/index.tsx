import { FC, memo } from "react";
import { Link } from "react-router-dom";
import { DecorativeElement } from "../../../DecorativeElement";

type ListBlock = { name: string; selectCategory?: (name: string) => void };

export const FooterListBlock: FC<ListBlock> = memo(
  ({ name, selectCategory }) => {
    return (
      <li className="max-sm:hidden sm:flex">
        <Link
          to="catalog"
          onClick={() => selectCategory?.(name)}
          className="group/catalog relative text-standart font-light uppercase tracking-[0.48px] cursor-pointer hover:text-light-turquoise transition-colors"
        >
          {name}
          <DecorativeElement className="absolute invisible h-[1px] w-0 bg-light-turquoise group-hover/catalog:w-full group-hover/catalog:visible transition-all duration-300 z-0" />
        </Link>
      </li>
    );
  }
);
