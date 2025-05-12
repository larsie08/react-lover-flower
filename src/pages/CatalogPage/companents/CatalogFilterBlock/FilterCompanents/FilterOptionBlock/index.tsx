import { FC, memo } from "react";

import { FilterOption } from "../..";
import { CatalogCheckSvg } from "../../../../../../assets";
import { DecorativeElement } from "../../../../../../components";
import { ConfirmModal } from "../ConfirmModal";

export type OptionBlockProps = {
  title: string;
  options: FilterOption[];
  currentId: string | null;
  handleClick: (id: string) => void;
  isOptionSelected: (id: string) => boolean;
};

export const FilterOptionBlock: FC<OptionBlockProps> = memo(
  ({ title, options, currentId, handleClick, isOptionSelected }) => {
    return (
      <div className="light_block flex flex-col gap-2">
        <h2 className="text-[14px] text-light-turquoise font-bold tracking-[0.56px] uppercase">
          {title}
        </h2>
        <ul className="flex flex-col gap-1">
          {options.map(({ id, name }) => (
            <li key={id} className="flex gap-1 relative">
              <label
                onClick={() => handleClick(id)}
                className="group/light_filter flex items-center gap-1 text-[12px] font-light tracking-[0.48px] uppercase cursor-pointer"
              >
                <DecorativeElement className="relative w-[12px] h-[12px] rounded-[2px] border-[0.5px] border-[#FFF]">
                  {isOptionSelected(id) && <CatalogCheckSvg />}
                </DecorativeElement>
                <span className="relative group-hover/light_filter:text-light-turquoise duration-200 transition-all">
                  {name}
                  <DecorativeElement className="absolute invisible h-[1px] w-0 bg-light-turquoise group-hover/light_filter:w-full group-hover/light_filter:visible transition-all duration-200" />
                </span>
              </label>
              {currentId === id && <ConfirmModal />}
            </li>
          ))}
        </ul>
      </div>
    );
  }
);
