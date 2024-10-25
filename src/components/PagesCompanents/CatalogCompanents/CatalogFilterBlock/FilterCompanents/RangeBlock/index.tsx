import { ChangeEvent, FC, useRef, useState } from "react";

import classNames from "classnames";

export const RangeBlock: FC = () => {
  const minRef = useRef(null);
  const maxRef = useRef(null);

  const [lowerFieldValue] = useState(800);
  const [upperFieldValue] = useState(2500);
  const [lowerValue, setLowerValue] = useState(lowerFieldValue);
  const [upperValue, setUpperValue] = useState(upperFieldValue);

  const handleLowerValue = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(event.target.value), upperValue - 1);
    setLowerValue(value);
  };
  const handleUpperValue = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(event.target.value), lowerValue + 1);
    setUpperValue(value);
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
              { ["z-50"]: lowerValue > upperFieldValue - 100 }
            )}
            min={lowerFieldValue}
            max={upperFieldValue}
            value={lowerValue}
            step={5}
            onChange={handleLowerValue}
            type="range"
          />
          <input
            ref={maxRef}
            className="border-t-[1px] absolute outline-none top-1 bottom-0 pointer-events-none bg-none w-full h-[1px] z-40"
            min={lowerFieldValue}
            max={upperFieldValue}
            value={upperValue}
            step={1}
            onChange={handleUpperValue}
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
