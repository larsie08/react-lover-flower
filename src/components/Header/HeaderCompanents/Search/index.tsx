import { FC } from "react";

import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";

import classNames from "classnames";

import { SearchSvg } from "../../../../assets";

export const Search: FC = () => {
  const lastScrollY = useSelector(
    (state: RootState) => state.header.lastScrollY
  );
  const defaultPosition = 80;

  return (
    <form className="ml-[50px] relative flex items-center">
      <SearchSvg />
      <label
        className="text-[14px] cursor-pointer font-normal tracking-[0.56px] uppercase"
        id="labelSearch"
        htmlFor="search"
      >
        Поиск
      </label>
      <input
        className={classNames(
          "absolute left-6 outline-none border-[#555] transition-[width] h-[30px] w-0 text-[14px] font-normal tracking-[.56px] uppercase placeholder:font-light placeholder:tracking-[.28px] placeholder:normal-case focus:border-b focus:w-[360px]",
          {
            ["bg-[#040A0A]"]: lastScrollY < defaultPosition,
            ["bg-[#000]"]: lastScrollY > defaultPosition,
          }
        )}
        placeholder="Введите свой запрос"
        type="search"
        id="search"
        name="search"
      />
    </form>
  );
};
