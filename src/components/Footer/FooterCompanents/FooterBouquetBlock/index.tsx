import { FC, memo } from "react";
import { Link } from "react-router-dom";

import { DecorativeElement } from "../../..";

type FooterBouquetProps = {
  name: string;
}

export const FooterBouquetBlock: FC<FooterBouquetProps> = memo(({ name }) => {
  return (
    <li className="max-sm:hidden sm:flex">
      <Link
        to="catalog"
        className="group/bouquet relative text-standart font-light uppercase tracking-[0.48px] cursor-pointer hover:text-light-turquoise transition-colors"
      >
        {name}
        <DecorativeElement className="absolute invisible h-[1px] w-0 bg-light-turquoise group-hover/bouquet:w-full group-hover/bouquet:visible transition-all duration-300" />
      </Link>
    </li>
  );
});
