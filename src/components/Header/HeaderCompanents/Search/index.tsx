import { FC, useCallback, useRef, useState } from "react";
import debounce from "debounce";

import { useAppDispatch } from "../../../../redux/store";
import { setSearchValue } from "../../../../redux/filter/slice";

import classNames from "classnames";

import { SearchSvg } from "../../../../assets";

interface SearchProps {
  lastScrollY: number;
}

export const Search: FC<SearchProps> = ({ lastScrollY }) => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState("");
  const searchRef = useRef(null);
  const defaultPosition = 80;

  const onSubmit = (data: any) => console.log(data);

  const updateSearchValue = useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 250),
    []
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateSearchValue(event.target.value);
    setValue(event.target.value);
  };

  return (
    <form onSubmit={onSubmit} className="ml-[50px] relative flex items-center">
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
        ref={searchRef}
        id="search"
        value={value}
        onChange={onChangeInput}
      />
    </form>
  );
};
