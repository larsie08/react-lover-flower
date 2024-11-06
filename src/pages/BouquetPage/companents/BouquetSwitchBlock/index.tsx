import { FC } from "react";
import { NavLink } from "react-router-dom";

interface BouquetSwitchProps {
  path: string;
  name: string;
  reviewsLength?: number;
}

export const BouquetSwitchBlock: FC<BouquetSwitchProps> = ({
  path,
  name,
  reviewsLength,
}) => {
  return (
    <NavLink
      to={path}
      end
      className={({ isActive }) =>
        isActive
          ? "w-[358px] flex flex-col justify-center border-b-[3px] rounded-[2px] text-light-turquoise"
          : "w-[358px] flex flex-col justify-center border-b-[1px] text-[#555555] hover:text-light-turquoise transition-all"
      }
    >
      <h1 className="text-[20px] text-center font-light tracking-[0.8px] uppercase pb-7">
        {name} {reviewsLength ? `(${reviewsLength})` : null}
      </h1>
    </NavLink>
  );
};
