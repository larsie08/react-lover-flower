import React, {
  ChangeEvent,
  FC,
  memo,
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

type SearchProps = {
  lastScrollY: number;
  SCROLL_HIDE_THRESHOLD: number;
  showHeader: boolean;
};

export const Search: FC<SearchProps> = memo(
  ({ lastScrollY, SCROLL_HIDE_THRESHOLD, showHeader }) => {
    const navigate = useNavigate();

    const searchRef = useRef<HTMLInputElement>(null);

    const [searchValue, setSearchValue] = useState("");
    const [searchItems, setSearchItems] = useState<Bouquet[]>([]);
    const [showSearchItems, toggleShowSearchItems] = useState(false);

    useEffect(() => {
      document.body.addEventListener("click", handleClickOutside);
      return () => {
        document.body.removeEventListener("click", handleClickOutside);
      };
    }, []);

    useEffect(() => {
      if (searchValue) {
        document.addEventListener("keydown", handleKeyDown);
      } else {
        toggleShowSearchItems(false);
      }
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, [searchValue]);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        searchRef.current &&
        event.composedPath().includes(searchRef.current) &&
        event.key === "Enter"
      ) {
        navigate(`search/${searchValue}`);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        event.composedPath().includes(searchRef.current)
      ) {
        toggleShowSearchItems(true);
      } else toggleShowSearchItems(false);
    };

    const clearSearchValue = useCallback(
      (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setSearchValue("");
        setSearchItems([]);
      },
      [navigate]
    );

    const fetchSearchBouquets = async (searchValue: string) => {
      try {
        const { data } = await axios.get<Bouquet[]>(
          `https://655b76e2ab37729791a92825.mockapi.io/items?name=${searchValue}&page=1&limit=5`
        );
        setSearchItems(data);
        toggleShowSearchItems(true);
      } catch (error) {
        console.error("Error fetching search bouquets:", error);
      }
    };

    const debouncedFetch = debounce((str: string) => {
      if (str !== "") {
        fetchSearchBouquets(str);
      } else setSearchItems([]);
    }, 500);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      const query = event.target.value.toLowerCase();
      setSearchValue(query);
      debouncedFetch(query);
    };

    return (
      <div className="flex xl:ml-[50px] flex-col relative justify-center lg:ml-[30px]">
        <form className="relative flex items-center">
          <SearchSvg />
          <input
            className={classNames(
              "left-6 outline-none border-[#555] transition-[width] h-[30px] text-[14px] font-normal tracking-[.56px] uppercase placeholder:font-light placeholder:tracking-[.28px] placeholder:normal-case border-b xl:w-[360px]",
              {
                ["bg-[#040A0A]/[0.40]"]: lastScrollY < SCROLL_HIDE_THRESHOLD,
                ["bg-[rgb(0,0,0)]"]: lastScrollY > SCROLL_HIDE_THRESHOLD,
              }
            )}
            type="search"
            placeholder="Введите свой запрос"
            ref={searchRef}
            id="search"
            value={searchValue}
            autoComplete="off"
            onChange={handleInputChange}
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
              "absolute flex flex-col top-0 right-0 bg-[black]/[0.8] [&:last-of-type]:border-b transition-all ease-in-out w-[360px] duration-300",
              { ["top-[70px]"]: lastScrollY < SCROLL_HIDE_THRESHOLD },
              { ["top-[5rem]"]: lastScrollY > SCROLL_HIDE_THRESHOLD },
              {
                ["-translate-y-[150%]"]:
                  (!showHeader && lastScrollY > SCROLL_HIDE_THRESHOLD) ||
                  !showSearchItems,
              }
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
  }
);
