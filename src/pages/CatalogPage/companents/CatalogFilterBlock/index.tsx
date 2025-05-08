import { FC, memo, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import debounce from "debounce";

import {
  setClearFiltersId,
  setFieldPriceValue,
  setFiltersId,
} from "../../../../redux/filter/slice";

import { FilterOptionBlock, RangeBlock } from "./FilterCompanents";
import { selectFiltersState } from "../../../../redux/filter/selectors";

const FILTER_OPTIONS = {
  format: [
    { id: "bouquet", name: "букет" },
    { id: "vase", name: "в вазе" },
    { id: "envelope", name: "в конверте" },
    { id: "basket", name: "в корзине" },
    { id: "hatbox", name: "в шляпной коробке" },
    { id: "box", name: "в ящике" },
  ],
  colors: [
    { id: "white", name: "белый" },
    { id: "yellow", name: "желтый" },
    { id: "green", name: "зеленый" },
    { id: "red", name: "красный" },
    { id: "orange", name: "оранжевый" },
    { id: "pink", name: "розовый" },
    { id: "blue", name: "синий" },
  ],
  lighting: [
    { id: "gentle", name: "нежные" },
    { id: "light", name: "яркие" },
  ],
  flowers: [
    { id: "Alstroemeria", name: "Альстромерия (2)" },
    { id: "Anthurium", name: "Антуриум (1)" },
    { id: "Asparagus", name: "Аспарагус (1)" },
    { id: "Astilba", name: "Астильба (7)" },
    { id: "Astrance", name: "Астранция (1)" },
  ],
};

export type FilterOption = {
  id: string;
  name: string;
};

const lowerFieldValue = 800;
const upperFieldValue = 2500;

export const CatalogFilterBlock: FC = memo(() => {
  const dispatch = useDispatch();

  const [value, setValue] = useState<number[]>([
    lowerFieldValue,
    upperFieldValue,
  ]);
  const [currentId, setCurrentId] = useState<string | null>(null);

  const { filtersId } = useSelector(selectFiltersState);

  const debouncedUpdatePrice = debounce((newValue: number | number[]) => {
    dispatch(setFieldPriceValue(newValue as number[]));
  }, 250);

  const handleSliderChange = useCallback(
    (_event: Event, newValue: number | number[]) => {
      setValue(newValue as number[]);
      debouncedUpdatePrice(newValue);
    },
    [debouncedUpdatePrice]
  );

  const handleClick = useCallback(
    (id: string) => {
      setCurrentId(id);
      dispatch(setFiltersId(id));
    },
    [dispatch]
  );

  const onClearFilters = () => {
    setCurrentId(null);
    dispatch(setClearFiltersId());
  };

  const isOptionSelected = useCallback(
    (id: string) => filtersId.includes(id),
    [filtersId]
  );

  useEffect(() => {
    if (currentId) {
      const timer = setTimeout(() => setCurrentId(null), 10000);
      return () => clearTimeout(timer);
    }
  }, [currentId]);

  return (
    <div className="sticky top-24 bottom-0 flex flex-col gap-5 p-5 bg-[#000]/[0.30] rounded-[20px] backdrop-blur-[10px] select-none">
      <FilterOptionBlock
        title="По свету"
        options={FILTER_OPTIONS.lighting}
        handleClick={handleClick}
        isOptionSelected={isOptionSelected}
        currentId={currentId}
      />
      <FilterOptionBlock
        title="По цвету"
        options={FILTER_OPTIONS.colors}
        handleClick={handleClick}
        isOptionSelected={isOptionSelected}
        currentId={currentId}
      />
      <FilterOptionBlock
        title="По формату"
        options={FILTER_OPTIONS.format}
        handleClick={handleClick}
        isOptionSelected={isOptionSelected}
        currentId={currentId}
      />
      <RangeBlock
        lowerFieldValue={lowerFieldValue}
        upperFieldValue={upperFieldValue}
        value={value}
        handleSliderChange={handleSliderChange}
      />
      <FilterOptionBlock
        title="По цветку"
        options={FILTER_OPTIONS.flowers}
        handleClick={handleClick}
        isOptionSelected={isOptionSelected}
        currentId={currentId}
      />
      <button
        onClick={onClearFilters}
        className="border-[1px] p-4 text-[12px] font-bold tracking-[1.2px] uppercase hover:bg-light-turquoise hover:text-[black] focus:border-light-turquoise active:shadow-[0_0_10px_0_#01281F_inset]"
      >
        Сбросить фильтр
      </button>
    </div>
  );
});
