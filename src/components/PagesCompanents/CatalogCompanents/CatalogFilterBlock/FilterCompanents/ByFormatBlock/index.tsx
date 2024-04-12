import { FC } from "react";

import { CatalogCheckSvg } from "../../../../../../assets";
import { DecorativeElement } from "../../../../..";
import { ConfirmModal } from "..";

const format = [
  { id: "bouquet", name: "букет" },
  { id: "vase", name: "в вазе" },
  { id: "envelope", name: "в конверте" },
  { id: "basket", name: "в корзине" },
  { id: "hatbox", name: "в шляпной коробке" },
  { id: "box", name: "в ящике" },
];

interface ByFormatBlockProps {
  currentId: string | undefined;
  handleClick: (id: string) => void;
  isClicked: (id: string) => boolean;
}

export const ByFormatBlock: FC<ByFormatBlockProps> = ({
  currentId,
  handleClick,
  isClicked,
}) => {
  return (
    <div className="format_block flex flex-col gap-2">
      <h2 className="text-[14px] text-light-turquoise font-bold tracking-[0.56px] uppercase">
        по формату
      </h2>
      <ul className="flex flex-col gap-1">
        {format.map((obj) => (
          <li key={obj.id} className="flex gap-1 relative">
            <label
              onClick={() => handleClick(obj.id)}
              className="group/format_filter flex items-center gap-1 text-[12px] font-light tracking-[0.48px] uppercase cursor-pointer"
            >
              <div className="relative w-[12px] h-[12px] rounded-[2px] border-[0.5px] border-[#FFF]">
                {isClicked(obj.id) && <CatalogCheckSvg />}
              </div>
              <h1 className="relative group-hover/format_filter:text-light-turquoise transition-all duration-200">
                {obj.name}
                <DecorativeElement className="absolute invisible h-[1px] w-0 bg-light-turquoise group-hover/format_filter:w-full group-hover/format_filter:visible transition-all duration-200" />
              </h1>
            </label>
            {currentId === obj.id && <ConfirmModal />}
          </li>
        ))}
      </ul>
    </div>
  );
};
