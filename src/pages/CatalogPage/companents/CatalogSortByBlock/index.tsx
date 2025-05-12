import { FC, memo, useEffect, useMemo, useRef, useState } from "react";
import classNames from "classnames";

import { SortPropertyEnum, SortType } from "../../../../redux/filter/types";

import { CatalogTipSvg } from "../../../../assets";
import { DecorativeElement } from "../../../../components";

type SortBlockProps = {
  sortValue: SortType;
  adaptiveIsOpen?: boolean;
  screenWidth: number;
  handleSortValue: (selectedOption: SortType) => void;
};

const sortOptions = [
  { name: "по популярности", sortProperty: SortPropertyEnum.RATING },
  { name: "по цене", sortProperty: SortPropertyEnum.COST },
  { name: "по алфавиту", sortProperty: SortPropertyEnum.NAME },
];

export const CatalogSortBlock: FC<SortBlockProps> = memo(
  ({ sortValue, handleSortValue, screenWidth, adaptiveIsOpen }) => {
    const sortRef = useRef<HTMLUListElement>(null);

    const [isOpen, setIsOpen] = useState(false);
    const [optionId, setOptionId] = useState<string>(sortOptions[0].name);

    const filteredSortOptions = useMemo(
      () =>
        screenWidth >= 768
          ? sortOptions.filter(
              (option) => option.sortProperty !== sortValue.sortProperty
            )
          : sortOptions,
      [screenWidth, sortOptions, sortValue]
    );

    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !event.composedPath().includes(sortRef.current)) {
        setIsOpen(false);
      }
    };

    const handleSortChange = (selectedOption: SortType) => {
      handleSortValue(selectedOption);
      setOptionId(selectedOption.name);
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
        className="catalog_page__sort relative flex flex-col w-[260px] md:gap-2 md:p-3 md:rounded-[10px] md:bg-[#000]/[.20] md:backdrop-blur-[10px] z-30 select-none"
      >
        {screenWidth >= 768 && (
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="flex justify-between items-center cursor-pointer"
          >
            <span className="text-[12px] font-light tracking-[0.48px] uppercase">
              {sortValue.name}
            </span>
            <CatalogTipSvg isOpen={isOpen} />
          </div>
        )}

        <div
          className={classNames(
            "popup md:absolute md:left-0 md:top-[42px] p-3 w-[260px] flex flex-col gap-2 rounded-[5px] md:bg-[#000]/[.40] z-30 transition-all duration-150",
            {
              ["visible md:h-[70px] opacity-100"]: isOpen || adaptiveIsOpen,
              ["invisible h-0 opacity-0"]: !isOpen && !adaptiveIsOpen,
            }
          )}
        >
          {filteredSortOptions.map((option) => (
            <li
              onClick={() => handleSortChange(option)}
              className="flex items-center gap-2 text-[12px] font-light tracking-[0.48px] uppercase cursor-pointer"
              key={option.name}
            >
              <DecorativeElement
                className={classNames(
                  "relative w-[12px] h-[12px] rounded-[2px] border-[0.5px] border-[#FFF]",
                  { ["bg-light-turquoise"]: optionId === option.name }
                )}
              />

              <p>{option.name}</p>
            </li>
          ))}
        </div>
      </ul>
    );
  }
);
