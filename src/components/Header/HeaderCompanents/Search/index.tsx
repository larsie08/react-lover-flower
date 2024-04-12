import React, {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import debounce from "debounce";
import classNames from "classnames";

import { Bouquet } from "../../../../redux/bouquets/types";

import { SearchCardBlock } from "./SearchCardBlock";
import { ClearSvg, SearchSvg } from "../../../../assets";

interface SearchProps {
  lastScrollY: number;
  defaultPosition: number;
  show: boolean;
}

export const Search: FC<SearchProps> = ({
  lastScrollY,
  defaultPosition,
  show,
}) => {
  const navigate = useNavigate();
  const searchRef = useRef<HTMLInputElement>(null);

  const [searchValue, setSearchValue] = useState("");
  const [searchItems, setSearchItems] = useState<Bouquet[]>([]);

  useEffect(() => {
    if (searchValue === "") {
      setSearchItems([]);
    }
  }, [searchValue]);

  useEffect(() => {
    if (searchValue !== "") {
      document.addEventListener("keydown", handleKeyDownEvent);
      return () => {
        document.removeEventListener("keydown", handleKeyDownEvent);
      };
    }
  }, [searchValue]);

  const handleKeyDownEvent = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        navigate(`search/${searchValue}`);
      }
    },
    [navigate, searchValue]
  );

  const clearSearchValue = useCallback(
    (event?: React.MouseEvent<HTMLButtonElement>) => {
      event?.preventDefault();
      setSearchValue("");
      setSearchItems([]);
    },
    []
  );

  const fetchSearchBouquets = useCallback(async (searchValue: string) => {
    try {
      const { data } = await axios.get<Bouquet[]>(
        `https://655b76e2ab37729791a92825.mockapi.io/items?name=${searchValue}&page=1&limit=5`
      );
      setSearchItems(data);
    } catch (error) {
      console.error("Error fetching search bouquets:", error);
    }
  }, []);

  const debouncedFetch = useCallback(
    debounce((str: string) => {
      if (str !== "") {
        fetchSearchBouquets(str);
      }
    }, 500),
    [fetchSearchBouquets]
  );

  const onChangeInput = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value.toLowerCase();
      setSearchValue(inputValue);
      debouncedFetch(inputValue);
    },
    [debouncedFetch]
  );

  return (
    <div className="flex ml-[50px] flex-col relative justify-center">
      <form className="relative flex items-center">
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
          value={searchValue}
          autoComplete="off"
          onChange={onChangeInput}
        />

        <button
          className="absolute right-0 cursor-pointer"
          onClick={clearSearchValue}
        >
          <ClearSvg />
        </button>
      </form>

      {searchItems.length > 0 && (
        <div
          className={classNames(
            "absolute flex flex-col top-0 right-0 bg-[black]/[0.8] [&:last-of-type]:border-b transition-all w-[360px]",
            { ["top-[70px]"]: lastScrollY < defaultPosition },
            { ["top-[5rem]"]: lastScrollY > defaultPosition },
            { ["-translate-y-full"]: !show && lastScrollY > defaultPosition }
          )}
        >
          {searchItems.map((item) => (
            <SearchCardBlock
              key={item.id}
              id={item.id}
              name={item.name}
              imageUrl={item.imageUrl}
              cost={item.cost}
            />
          ))}
        </div>
      )}
    </div>
  );
};
