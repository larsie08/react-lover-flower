import { FC } from "react";
import { Link } from "react-router-dom";

import { DecorativeElement } from "../../..";

interface FooterTitleProps {
  title: string;
}

export const FooterTitleBlock: FC<FooterTitleProps> = ({ title }) => {
  return (
    <li className="text-[14px] font-bold text-light-turquoise mb-2.5 uppercase">
      <Link
        to="catalog"
        className="group/footer-title relative hover:text-cherry transition-colors"
      >
        {title}
        <DecorativeElement className="absolute invisible h-[1px] w-0 bg-cherry group-hover/footer-title:w-full group-hover/footer-title:visible transition-all duration-300" />
      </Link>
    </li>
  );
};
