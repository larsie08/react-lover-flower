import { FC, memo, useEffect, useMemo, useRef, useState } from "react";
import classNames from "classnames";

import { SortPropertyEnum, SortType } from "../../../../redux/filter/types";

import { CatalogTipSvg } from "../../../../assets";

type SortBlockProps = {
  sortValue: SortType;
  handleSortValue: (selectedOption: SortType) => void;
};

const sortOptions = [
  { name: "по популярности", sortProperty: SortPropertyEnum.RATING },
  { name: "по цене", sortProperty: SortPropertyEnum.COST },
  { name: "по алфавиту", sortProperty: SortPropertyEnum.NAME },
];

export const CatalogSortBlock: FC<SortBlockProps> = memo(
  ({ sortValue, handleSortValue }) => {
    const sortRef = useRef<HTMLUListElement>(null);

    const [isOpen, setIsOpen] = useState(false);

    const filteredSortOptions = useMemo(
      () =>
        sortOptions.filter(
          (option) => option.sortProperty !== sortValue.sortProperty
        ),
      [sortValue]
    );

    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !event.composedPath().includes(sortRef.current)) {
        setIsOpen(false);
      }
    };

    const handleSortChange = (selectedOption: SortType) => {
      handleSortValue(selectedOption);
      setIsOpen(false);
    };

    useEffect(() => {
      if (isOpen) document.addEventListener("click", handleClickOutside);
      else document.removeEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }, [isOpen, handleClickOutside]);

    return (
      <ul
        ref={sortRef}
        className="catalog_page__sort relative flex flex-col w-[260px] gap-2 p-3 rounded-[10px] bg-[#000]/[.20] backdrop-blur-[10px] z-30 select-none"
      >
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="flex justify-between items-center cursor-pointer"
        >
          <span className="text-[12px] font-light tracking-[0.48px] uppercase">
            {sortValue.name}
          </span>
          <CatalogTipSvg isOpen={isOpen} />
        </div>
        <div
          className={classNames(
            "popup absolute left-0 top-[42px] p-3 w-[260px] flex flex-col gap-2 rounded-[5px] bg-[#000]/[.40] z-30 transition-all duration-150",
            {
              ["visible h-[70px] opacity-100"]: isOpen,
              ["invisible h-0 opacity-0"]: !isOpen,
            }
          )}
        >
          {filteredSortOptions.map((option) => (
            <li
              onClick={() => handleSortChange(option)}
              className="text-[12px] font-light tracking-[0.48px] uppercase cursor-pointer"
              key={option.name}
            >
              {option.name}
            </li>
          ))}
        </div>
      </ul>
    );
  }
);

