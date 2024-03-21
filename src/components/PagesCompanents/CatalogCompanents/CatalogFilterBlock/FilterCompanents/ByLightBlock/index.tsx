import { FC } from "react";

import { CatalogCheckSvg } from "../../../../../../assets";
import { DecorativeElement } from "../../../../..";

const lighting = [
  { id: "gentle", name: "нежные" },
  { id: "light", name: "яркие" },
];

interface ByLightBlockProps {
  handleClick: (id: string) => void;
  isClicked: (id: string) => boolean;
}

export const ByLightBlock: FC<ByLightBlockProps> = ({
  handleClick,
  isClicked,
}) => {
  return (
    <div className="light_block flex flex-col gap-2">
      <h2 className="text-[14px] text-light-turquoise font-bold tracking-[0.56px] uppercase">
        По свету
      </h2>
      <ul className="flex flex-col gap-1">
        {lighting.map((obj) => (
          <li key={obj.id} className="flex gap-1">
            <label
              onClick={() => handleClick(obj.id)}
              className="group/light_filter flex items-center gap-1 text-[12px] font-light tracking-[0.48px] uppercase cursor-pointer"
            >
              <div className="relative w-[12px] h-[12px] rounded-[2px] border-[0.5px] border-[#FFF]">
                {isClicked(obj.id) && <CatalogCheckSvg />}
              </div>
              <p className="relative group-hover/light_filter:text-light-turquoise duration-200 transition-all">
                {obj.name}
                <DecorativeElement className="absolute invisible h-[1px] w-0 bg-light-turquoise group-hover/light_filter:w-full group-hover/light_filter:visible transition-all duration-200" />
              </p>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
