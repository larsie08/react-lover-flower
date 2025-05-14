import { FC, memo } from "react";
import { NavLink } from "react-router-dom";

interface BouquetSwitchProps {
  path: string;
  name: string;
  reviewsLength?: number;
}

export const BouquetSwitchBlock: FC<BouquetSwitchProps> = memo(
  ({ path, name, reviewsLength }) => {
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
        <h1 className="lg:text-[20px] max-lg:text-[14px] text-center font-light tracking-[0.8px] uppercase pb-7">
          {name} {reviewsLength ? `(${reviewsLength})` : null}
        </h1>
      </NavLink>
    );
  }
);
