import { ChangeEvent, FC, useEffect, useRef, useState } from "react";

import { useSelector } from "react-redux";
import {
  selectMaxPrice,
  selectMinPrice,
} from "../../../../../../redux/filter/selectors";
import classNames from "classnames";

export const RangeBlock: FC = () => {
  const min = useSelector(selectMinPrice);
  const max = useSelector(selectMaxPrice);

  console.log(max, min);

  const [lowerValue, setLowerValue] = useState(min);
  const [upperValue, setUpperValue] = useState(max);

  useEffect(() => {
    setLowerValue(min);
    setUpperValue(max);
  }, [min, max]);

  const minRef = useRef(null);
  const maxRef = useRef(null);

  const handlelowerValue = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(event.target.value), upperValue - 1);
    setLowerValue(value);
    event.target.value = value.toString();
  };
  const handleupperValue = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(event.target.value), lowerValue + 1);
    setUpperValue(value);
    event.target.value = value.toString();
  };

  return (
    <div className="range_block flex flex-col gap-2">
      <h2 className="text-[14px] text-light-turquoise font-bold tracking-[0.56px] uppercase">
        стоимость
      </h2>
      <form className="flex flex-col w-full">
        <div className="group__range_inputs h-[15px] relative">
          <input
            ref={minRef}
            className={classNames(
              "border-t-[1px] absolute outline-none top-1 bottom-0 pointer-events-none bg-none w-full h-[1px] z-30",
              { ["z-5"]: lowerValue > max - 100 }
            )}
            min={min}
            max={max}
            value={lowerValue}
            step={1}
            onChange={(event) => handlelowerValue(event)}
            type="range"
          />
          <input
            ref={maxRef}
            className="border-t-[1px] absolute outline-none top-1 bottom-0 pointer-events-none bg-none w-full h-[1px] z-40"
            min={min}
            max={max}
            value={upperValue}
            step={1}
            onChange={(event) => handleupperValue(event)}
            type="range"
          />
        </div>
        <label
          className="text-[12px] font-light tracking-[0.48px] uppercase"
          htmlFor="range"
        >
          Цена: {lowerValue} ₽ – {upperValue} ₽
        </label>
      </form>
    </div>
  );
};
