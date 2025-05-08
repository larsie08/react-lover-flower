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
import { TextField } from "@mui/material";
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
          `http://localhost:3000/api/bouquets/search/${searchValue}`
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
          <TextField
            id="search-input"
            type="search"
            ref={searchRef}
            value={searchValue}
            autoComplete="off"
            placeholder="Введите свой запрос"
            onChange={handleInputChange}
            variant="standard"
            sx={{
              input: {
                color: "white",
                fontSize: "14px",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                fontWeight: 400,
                width: "150px",
                transition: "width 0.3s ease",
                "&:focus": {
                  width: "315px",
                },
                "&::placeholder": {
                  color: "gray",
                  opacity: 0.4,
                  textTransform: "none",
                  fontWeight: 300,
                  letterSpacing: "0.02em",
                },
              },
              "& .MuiInput-underline:before": {
                borderBottom: "1px solid #6B7280",
              },
              "& .MuiInput-underline:hover": {
                borderBottom: "1px solid #9CA3AF",
              },
              "& .MuiInput-underline:after": {
                borderBottom: "1px solid white",
              },
              transition: "border-color 0.3s ease",
              backgroundColor:
                lastScrollY < SCROLL_HIDE_THRESHOLD
                  ? "rgba(4, 10, 10, 0.4)"
                  : "rgb(0, 0, 0)",
            }}
            slotProps={{
              input: {
                startAdornment: <SearchSvg />,
                endAdornment: searchValue.length !== 0 && (
                  <button onClick={clearSearchValue}>
                    <ClearSvg />
                  </button>
                ),
              },
            }}
          />
        </form>

        {searchItems.length > 0 && (
          <div
            className={classNames(
              "absolute flex flex-col top-0 left-0 bg-[black]/[0.8] [&:last-of-type]:border-b transition-all ease-in-out w-[360px] duration-300",
              {
                ["top-[70px]"]: lastScrollY < SCROLL_HIDE_THRESHOLD,
              },
              {
                ["top-[5rem]"]: lastScrollY > SCROLL_HIDE_THRESHOLD,
              },
              {
                ["-translate-y-[200%] opacity-0"]:
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
