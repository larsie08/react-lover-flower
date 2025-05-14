import { FC } from "react";
import { ArrowSvg } from "../../../../../assets";

export const BackButton: FC<{ goBack: () => void }> = ({ goBack }) => {
  return (
    <div className="w-full">
      <button
        onClick={goBack}
        className="flex gap-2 items-center text-[10px] w-[100px] font-normal tracking-[0.4px] uppercase"
      >
        <ArrowSvg className="w-[16px] h-[16px]" /> назад
      </button>
    </div>
  );
};
