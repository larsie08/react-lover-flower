import { FC, memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  setClearFiltersId,
  setFiltersId,
} from "../../../../redux/filter/slice";
import { RootState } from "../../../../redux/store";

import {
  ByColorBlock,
  ByFlowerBlock,
  ByFormatBlock,
  ByLightBlock,
  RangeBlock,
} from "./FilterCompanents";

export const CatalogFilterBlock: FC = memo(() => {
  const dispatch = useDispatch();

  const filtersId = useSelector((state: RootState) => state.filter.filtersId);

  const [currentId, setCurrentId] = useState<string | undefined>();

  useEffect(() => {
    if (currentId) setTimeout(() => setCurrentId(undefined), 10000);
  }, [currentId, dispatch]);

  const handleClick = (id: string) => {
    setCurrentId(id);
    dispatch(setFiltersId(id));
  };

  const onClear = () => {
    setCurrentId(undefined);
    dispatch(setClearFiltersId());
  };

  const isClicked = (id: string) => {
    return filtersId.some((itemId) => itemId === id);
  };

  return (
    <div className="sticky top-24 bottom-0 flex flex-col gap-5 p-5 bg-[#000]/[0.30] rounded-[20px] backdrop-blur-[10px select-none">
      <ByLightBlock
        handleClick={handleClick}
        isClicked={isClicked}
        currentId={currentId}
      />
      <ByColorBlock
        handleClick={handleClick}
        isClicked={isClicked}
        currentId={currentId}
      />
      <ByFormatBlock
        handleClick={handleClick}
        isClicked={isClicked}
        currentId={currentId}
      />
      <RangeBlock />
      <ByFlowerBlock
        handleClick={handleClick}
        isClicked={isClicked}
        currentId={currentId}
      />
      <button
        onClick={onClear}
        className="border-[1px] p-4 text-[12px] font-bold tracking-[1.2px] uppercase hover:bg-light-turquoise hover:text-[black] focus:border-light-turquoise active:shadow-[0_0_10px_0_#01281F_inset]"
      >
        Сбросить фильтр
      </button>
    </div>
  );
});
