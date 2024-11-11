import { FC, memo } from "react";

import { Slider } from "@mui/material";

type RangeBlockProps = {
  lowerFieldValue: number;
  upperFieldValue: number;
  value: number[];
  handleSliderChange: (event: Event, newValue: number | number[]) => void;
};

export const RangeBlock: FC<RangeBlockProps> = memo(
  ({ lowerFieldValue, upperFieldValue, value, handleSliderChange  }) => {
    return (
      <div className="range_block flex flex-col gap-2">
        <h2 className="text-[14px] text-light-turquoise font-bold tracking-[0.56px] uppercase">
          стоимость
        </h2>
        <form className="flex flex-col w-full">
          <div className="group__range_inputs h-[15px] relative">
            <Slider
              size="small"
              min={lowerFieldValue}
              max={upperFieldValue}
              value={value}
              onChange={handleSliderChange}
            />
          </div>
          <label
            className="text-[12px] mt-2.5 font-light tracking-[0.48px] uppercase"
            htmlFor="range"
          >
            Цена: {value[0]} ₽ – {value[1]} ₽
          </label>
        </form>
      </div>
    );
  }
);
