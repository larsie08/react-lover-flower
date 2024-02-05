import { FC, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

import { RootState, useAppDispatch } from "../../../../redux/store";
import { setSortValue } from "../../../../redux/filter/slice";
import { SortPropertyEnum, SortType } from "../../../../redux/filter/types";

import { CatalogTipSvg } from "../../../../assets";

const sortOptions = [
  { name: "по популярности", sortProperty: SortPropertyEnum.RATING },
  { name: "по цене", sortProperty: SortPropertyEnum.COST },
  { name: "по алфавиту", sortProperty: SortPropertyEnum.NAME },
];

export const CatalogSortBlock: FC = () => {
  const dispatch = useAppDispatch();
  const sortRef = useRef<HTMLUListElement>(null);
  const sortValue = useSelector((state: RootState) => state.filter.sort);

  const [availableSortOptions, setAvailableSortOptions] =
    useState<SortType[]>(sortOptions);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setAvailableSortOptions(
      sortOptions.filter(
        (option) => option.sortProperty !== sortValue.sortProperty
      )
    );
  }, [sortValue]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !event.composedPath().includes(sortRef.current)) {
        setIsOpen(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleSortChange = (selectedOption: SortType) => {
    dispatch(setSortValue(selectedOption));
    setIsOpen(false);
  };

  return (
    <ul
      ref={sortRef}
      className="catalog_page__sort relative flex flex-col w-[260px] gap-2 p-3 rounded-[10px] bg-[#000]/[.20] backdrop-blur-[10px] z-30 select-none"
    >
      <div
        onClick={togglePopup}
        className="flex justify-between items-center cursor-pointer"
      >
        <span className="text-[12px] font-light tracking-[0.48px] uppercase">
          {sortValue.name}
        </span>
        <CatalogTipSvg />
      </div>

      {isOpen && (
        <div className="popup absolute left-0 top-[42px] p-3 w-[260px] flex flex-col gap-2 rounded-[5px] bg-[#000]/[.40] z-30">
          {availableSortOptions.map((option, id) => (
            <li
              onClick={() => handleSortChange(option)}
              className="text-[12px] font-light tracking-[0.48px] uppercase cursor-pointer"
              key={id}
            >
              {option.name}
            </li>
          ))}
        </div>
      )}
    </ul>
  );
};
