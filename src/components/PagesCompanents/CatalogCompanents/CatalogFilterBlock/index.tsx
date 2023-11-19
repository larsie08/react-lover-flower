import { FC } from "react";

import { setClearFiltersId } from "../../../../redux/filter/slice";

import {
  ByColorBlock,
  ByFlowerBlock,
  ByFormatBlock,
  ByLightBlock,
  RangeBlock,
} from "./CatalogBlocks";
import { useDispatch } from "react-redux";

export const CatalogFilterBlock: FC = () => {
  const dispatch = useDispatch();
  
  const onClear = () => {
    dispatch(setClearFiltersId());
  };

  return (
    <div className="flex flex-col gap-5 p-5 bg-[#000]/[0.30] rounded-[20px] backdrop-blur-[10px]">
      <ByLightBlock />
      <ByColorBlock />
      <ByFormatBlock />
      <RangeBlock />
      <ByFlowerBlock />
      <button
        onClick={onClear}
        className="border-[1px] p-4 text-[12px] font-bold tracking-[1.2px] uppercase hover:bg-light-turquoise hover:text-[black] focus:border-light-turquoise active:shadow-[0_0_10px_0_#01281F_inset]"
      >
        Сбросить фильтр
      </button>
    </div>
  );
};
