import {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import debounce from "debounce";
import classNames from "classnames";

import { useAppDispatch } from "../../../../redux/store";
import { setSearchValue } from "../../../../redux/filter/slice";

import { ClearSvg, SearchSvg } from "../../../../assets";

interface SearchProps {
  lastScrollY: number;
}

export const Search: FC<SearchProps> = ({ lastScrollY }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const searchRef = useRef<HTMLInputElement>(null);

  const [value, setValue] = useState("");
  const defaultPosition = 80;

  useEffect(() => {
    if (value !== "") {
      document.addEventListener("keydown", handleKeyDownEvent);
      return () => {
        document.removeEventListener("keydown", handleKeyDownEvent);
      };
    }
  }, [value]);

  const handleKeyDownEvent = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      navigate(`search/${value}`);
    }
  };

  const clearSearchValue = () => {
    dispatch(setSearchValue(""));
    setValue("");
  };

  const updateSearchValue = useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 250),
    [dispatch]
  );

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    updateSearchValue(event.target.value.toLowerCase());
    setValue(event.target.value.toLowerCase());
  };

  return (
    <form className="ml-[50px] relative flex items-center">
      <SearchSvg />
      <input
        className={classNames(
          "left-6 outline-none border-[#555] transition-[width] h-[30px] text-[14px] font-normal tracking-[.56px] uppercase placeholder:font-light placeholder:tracking-[.28px] placeholder:normal-case border-b w-[360px]",
          {
            ["bg-[#040A0A]/[0.40]"]: lastScrollY < defaultPosition,
            ["bg-[rgb(0,0,0)]"]: lastScrollY > defaultPosition,
          }
        )}
        type="search"
        placeholder="Введите свой запрос"
        ref={searchRef}
        id="search"
        value={value}
        onChange={onChangeInput}
      />

      <button
        className="absolute right-0 bottom-[30px] cursor-pointer"
        onClick={clearSearchValue}
      >
        <ClearSvg />
      </button>
    </form>
  );
};
