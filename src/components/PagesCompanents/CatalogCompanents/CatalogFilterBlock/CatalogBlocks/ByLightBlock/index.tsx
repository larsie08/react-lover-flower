import { FC } from "react";

import { CatalogCheckSvg } from "../../../../../../assets";

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
