import { FC } from "react";

import { CatalogCheckSvg } from "../../../../../../assets";
import { DecorativeElement } from "../../../../..";
import { ConfirmModal } from "..";

const colors = [
  { id: "white", name: "белый" },
  { id: "yellow", name: "желтый" },
  { id: "green", name: "зеленый" },
  { id: "red", name: "красный" },
  { id: "orange", name: "оранжевый" },
  { id: "pink", name: "розовый" },
  { id: "blue", name: "синий" },
];

interface ByColorBlockProps {
  currentId: string | undefined;
  handleClick: (id: string) => void;
  isClicked: (id: string) => boolean;
}

export const ByColorBlock: FC<ByColorBlockProps> = ({
  currentId,
  handleClick,
  isClicked,
}) => {
  return (
    <div className="colors_block flex flex-col gap-2">
      <h2 className="text-[14px] text-light-turquoise font-bold tracking-[0.56px] uppercase">
        По цвету
      </h2>
      <ul className="flex flex-col gap-1">
        {colors.map((obj) => (
          <li className="flex gap-1 relative" key={obj.id}>
            <label
              onClick={() => handleClick(obj.id)}
              className="group/color_filter flex items-center gap-1 text-[12px] font-light tracking-[0.48px] uppercase cursor-pointer"
            >
              <div className="relative w-[12px] h-[12px] rounded-[2px] border-[0.5px] border-[#FFF]">
                {isClicked(obj.id) && <CatalogCheckSvg />}
              </div>
              <h1 className="relative group-hover/color_filter:text-light-turquoise duration-200 transition-all">
                {obj.name}
                <DecorativeElement className="absolute invisible h-[1px] w-0 bg-light-turquoise group-hover/color_filter:w-full group-hover/color_filter:visible transition-all duration-200" />
              </h1>
            </label>
            {currentId === obj.id && <ConfirmModal />}
          </li>
        ))}
      </ul>
    </div>
  );
};
