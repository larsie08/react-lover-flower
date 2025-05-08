import { FC, memo } from "react";
import { Link } from "react-router-dom";

import { DecorativeElement } from "../../..";

type TitleListProps = {
  title: string;
  path: string;
  className: string;
};

export const FooterTitleListBlock: FC<TitleListProps> = memo(
  ({ title, path, className }) => {
    return (
      <li className={className}>
        <Link
          to={path}
          className="group/footer-title relative hover:text-cherry transition-colors"
        >
          {title}
          <DecorativeElement className="absolute invisible h-[1px] w-0 bg-cherry group-hover/footer-title:w-full group-hover/footer-title:visible transition-all duration-300" />
        </Link>
      </li>
    );
  }
);
