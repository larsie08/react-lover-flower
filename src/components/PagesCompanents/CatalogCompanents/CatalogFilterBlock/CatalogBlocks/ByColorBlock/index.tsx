import { FC } from "react";
import { useSelector } from "react-redux";

import { useAppDispatch } from "../../../../../../redux/store";
import { setFiltersId } from "../../../../../../redux/filter/slice";
import { selectFiltersById } from "../../../../../../redux/filter/selectors";

import { CatalogCheckSvg } from "../../../../../../assets";

const colors = [
  { id: "white", name: "белый" },
  { id: "yellow", name: "желтый" },
  { id: "green", name: "зеленый" },
  { id: "red", name: "красный" },
  { id: "orange", name: "оранжевый" },
  { id: "pink", name: "розовый" },
  { id: "blue", name: "синий" },
];

export const ByColorBlock: FC = () => {
  const dispatch = useAppDispatch();
  const filtersId = useSelector(selectFiltersById);

  const handleClick = (id: string) => {
    dispatch(setFiltersId(id));
  };

  const isClicked = (id: string) => {
    return filtersId.some((itemId) => itemId === id);
  };

  return (
    <div className="colors_block flex flex-col gap-2">
      <h2 className="text-[14px] text-light-turquoise font-bold tracking-[0.56px] uppercase">
        По цвету
      </h2>
      <ul className="flex flex-col gap-1">
        {colors.map((obj) => (
          <li key={obj.id}>
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
