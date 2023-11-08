import { FC } from "react";

import { SearchSvg } from "../../../../assets";

export const Search: FC = () => {
  return (
    <form className="ml-[50px] relative flex items-center">
      <SearchSvg />
      <label id="labelSearch" htmlFor="search">
        Поиск
      </label>
      <input
        className="absolute left-6 outline-none border-[#555] bg-[#000] transition-[width] h-[30px] w-0 text-[14px] font-normal tracking-[.56px] uppercase placeholder:font-light placeholder:tracking-[.28px] placeholder:normal-case focus:border-b focus:w-[360px]"
        placeholder="Введите свой запрос"
        type="search"
        id="search"
        name="search"
      />
    </form>
  );
};
