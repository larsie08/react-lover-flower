import { FC } from "react";

import {
  setClearFiltersId,
  setFiltersId,
} from "../../../../redux/filter/slice";

import {
  ByColorBlock,
  ByFlowerBlock,
  ByFormatBlock,
  ByLightBlock,
  RangeBlock,
} from "./FilterCompanents";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";

export const CatalogFilterBlock: FC = () => {
  const dispatch = useDispatch();

  const filtersId = useSelector((state: RootState) => state.filter.filtersId);

  const handleClick = (id: string) => {
    dispatch(setFiltersId(id));
  };

  const onClear = () => {
    dispatch(setClearFiltersId());
  };

  const isClicked = (id: string) => {
    return filtersId.some((itemId) => itemId === id);
  };

  return (
    <div className="sticky top-24 bottom-0 flex flex-col gap-5 p-5 bg-[#000]/[0.30] rounded-[20px] backdrop-blur-[10px select-none">
      <ByLightBlock handleClick={handleClick} isClicked={isClicked} />
      <ByColorBlock handleClick={handleClick} isClicked={isClicked} />
      <ByFormatBlock handleClick={handleClick} isClicked={isClicked} />
      <RangeBlock />
      <ByFlowerBlock handleClick={handleClick} isClicked={isClicked} />
      <button
        onClick={onClear}
        className="border-[1px] p-4 text-[12px] font-bold tracking-[1.2px] uppercase hover:bg-light-turquoise hover:text-[black] focus:border-light-turquoise active:shadow-[0_0_10px_0_#01281F_inset]"
      >
        Сбросить фильтр
      </button>
    </div>
  );
};
