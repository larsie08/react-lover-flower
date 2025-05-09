import { FC, memo } from "react";
import { Link } from "react-router-dom";
import { DecorativeElement } from "../DecorativeElement";

type PathBlockProps = {
  items: { text: string; path: string }[];
};

export const PathBlock: FC<PathBlockProps> = memo(({ items }) => {
  return (
    <>
      <nav className="title">
        <ol className="flex w-[500px]">
          {items.map((item, index) => (
            <li
              key={item.text}
              className="text-[12px] font-normal tracking-[0.48px] uppercase"
            >
              <Link
                className="group/path relative hover:text-light-turquoise transition-colors"
                to={item.path}
              >
                {item.text}
                <DecorativeElement className="absolute invisible h-[1px] w-0 bg-light-turquoise group-hover/path:w-full group-hover/path:visible transition-all duration-300 z-0" />
              </Link>
              {index < items.length - 1 && <span className="mx-1">/</span>}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
});
