import { FC, memo } from "react";
import { Link } from "react-router-dom";

import { DecorativeElement } from "../../..";

interface FooterPagesProps {
  page: {
    link: string;
    url: string;
  };
}

export const FooterPagesBlock: FC<FooterPagesProps> = memo(({ page }) => {
  return (
    <li className="flex">
      <Link
        to={page.url}
        className="group/page relative text-[14px] font-bold text-light-turquoise uppercase tracking-[0.48px] cursor-pointer hover:text-cherry transition-colors max-sm:text-center"
      >
        {page.link}
        <DecorativeElement className="absolute invisible h-[1px] w-0 bg-cherry group-hover/page:w-full group-hover/page:visible transition-all duration-300" />
      </Link>
    </li>
  );
});
