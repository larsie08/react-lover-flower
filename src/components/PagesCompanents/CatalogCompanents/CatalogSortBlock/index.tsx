import { FC } from "react";

const sort = ["по популярности", "по цене", "по алфавиту"];

export const CatalogSortBlock: FC = () => {
  return (
    <ul className="catalog_page__sort h-[40px] w-[260px] p-3 rounded-[10px] bg-[#000]/[.20] backdrop-blur-[10px]">
      {sort.map((item, id) => (
        <li
          className="text-[12px] font-light tracking-[0.48px] uppercase"
          key={id}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};
