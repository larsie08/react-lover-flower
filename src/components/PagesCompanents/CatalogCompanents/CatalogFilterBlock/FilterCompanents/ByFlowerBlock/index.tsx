import { FC } from "react";

import { CatalogCheckSvg } from "../../../../../../assets";
import { DecorativeElement } from "../../../../..";

const flowers = [
  { id: "Alstroemeria", name: "Альстромерия (2)" },
  { id: "Anthurium", name: "Антуриум (1)" },
  { id: "Asparagus", name: "Аспарагус (1)" },
  { id: "Astilba", name: "Астильба (7)" },
  { id: "Astrance", name: "Астранция (1)" },
];

interface ByColorBlockProps {
  handleClick: (id: string) => void;
  isClicked: (id: string) => boolean;
}

export const ByFlowerBlock: FC<ByColorBlockProps> = ({
  handleClick,
  isClicked,
}) => {
  return (
    <div className="light_block flex flex-col gap-2">
      <h2 className="text-[14px] text-light-turquoise font-bold tracking-[0.56px] uppercase">
        по цветку
      </h2>
      <ul className="flex flex-col gap-1">
        {flowers.map((obj) => (
          <li key={obj.id} className="flex gap-1">
            <label
              onClick={() => handleClick(obj.id)}
              className="group/flower_filter flex items-center gap-1 text-[12px] font-light tracking-[0.48px] uppercase cursor-pointer"
            >
              <div className="relative w-[12px] h-[12px] rounded-[2px] border-[0.5px] border-[#FFF]">
                {isClicked(obj.id) && <CatalogCheckSvg />}
              </div>
              <p className="relative group-hover/flower_filter:text-light-turquoise duration-200 transition-all">
                {obj.name}
                <DecorativeElement className="absolute invisible h-[1px] w-0 bg-light-turquoise group-hover/flower_filter:w-full group-hover/flower_filter:visible transition-all duration-200" />
              </p>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
