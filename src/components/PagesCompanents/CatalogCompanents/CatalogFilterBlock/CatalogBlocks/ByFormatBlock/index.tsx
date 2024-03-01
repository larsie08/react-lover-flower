import { FC } from "react";
import { useSelector } from "react-redux";

import { RootState, useAppDispatch } from "../../../../../../redux/store";
import { setFiltersId } from "../../../../../../redux/filter/slice";

import { CatalogCheckSvg } from "../../../../../../assets";

const format = [
  { id: "bouquet", name: "букет" },
  { id: "vase", name: "в вазе" },
  { id: "envelope", name: "в конверте" },
  { id: "basket", name: "в корзине" },
  { id: "hatbox", name: "в шляпной коробке" },
  { id: "box", name: "в ящике" },
];

interface ByFormatBlockProps {
  handleClick: (id: string) => void;
  isClicked: (id: string) => boolean;
}

export const ByFormatBlock: FC<ByFormatBlockProps> = ({
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
          <li key={obj.id} className="flex gap-1">
            <label
              onClick={() => handleClick(obj.id)}
              className="flex items-center gap-1 text-[12px] font-light tracking-[0.48px] uppercase cursor-pointer"
            >
              <div className="relative w-[12px] h-[12px] rounded-[2px] border-[0.5px] border-[#FFF]">
                {isClicked(obj.id) && <CatalogCheckSvg />}
              </div>
              {obj.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
