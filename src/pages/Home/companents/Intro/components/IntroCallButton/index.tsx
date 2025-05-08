import { FC } from "react";
import { PhoneButtonSvg } from "../../../../../../assets";

type Props = {
  onClick: () => void;
};

export const CallButton: FC<Props> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="call w-[180px] mt-3 flex items-center gap-2 py-2 px-4 bg-black/20 rounded-xl backdrop-blur-[10px]"
  >
    <PhoneButtonSvg />
    <p className="text-[14px] font-normal tracking-[1.4px] uppercase text-light-turquoise">
      Заказать звонок
    </p>
  </button>
);
