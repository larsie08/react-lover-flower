import { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import classNames from "classnames";
import axios from "axios";
import debounce from "debounce";

import { CardBlock, DecorativeElement } from "../../components";
import { NoResultsMessage } from "./NoResultMessage";

import { Bouquet } from "../../redux/bouquets/types";
import { ClearSvg, SearchSvg } from "../../assets";

const SearchResultPage: FC = () => {
  const { searchValue } = useParams<string>();

  const searchRef = useRef<HTMLInputElement>(null);

  const [searchItems, setSearchItems] = useState<Bouquet[]>([]);
  const [formSearchValue, setSearchValue] = useState(searchValue);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchValue(query);
    debouncedFetch(query);
  };

  const debouncedFetch = debounce((str: string) => {
    if (str !== "") {
      fetchSearchBouquets(str);
    } else setSearchItems([]);
  }, 500);

  const clearSearchValue = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSearchValue("");
    setSearchItems([]);
  };

  const fetchSearchBouquets = async (searchValue: string) => {
    try {
      const { data } = await axios.get<Bouquet[]>(
        `https://655b76e2ab37729791a92825.mockapi.io/items?name=${searchValue}&page=1&limit=5`
      );
      setSearchItems(data);
    } catch (error) {
      console.error("Error fetching search bouquets:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get<Bouquet[]>(
          `https://655b76e2ab37729791a92825.mockapi.io/items?search=${searchValue}`
        );
        setSearchItems(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [searchValue]);

  return (
    <div
      className={classNames(
        "result_search max-h-[3000px] relative bg-[#040A0A] pt-[120px] pb-20 px-3",
        { ["h-[900px]"]: searchItems.length === 0 }
      )}
    >
      <DecorativeElement className="absolute sm:top-0 sm:left-0 w-[217px] h-[173px] bg-light-turquoise blur-[125px] max-sm:w-[205px] max-sm:h-[102px] max-sm:rotate-[32.828deg] max-sm:blur-[75px] max-sm:left-[-6rem] max-sm:top-[2rem]" />
      <DecorativeElement className="absolute -top-[20rem] right-0 w-[504px] h-[625px] bg-cherry rounded-[625px] blur-[125px] max-sm:hidden" />
      <div className="wrapper container mx-auto flex flex-col sm:gap-12 max-sm:gap-5">
        <form className="relative w-[300px] flex items-center sm:hidden">
          <SearchSvg />
          <input
            className={classNames(
              "left-6 outline-none border-[#555] transition-[width] h-[30px] text-[14px] font-normal tracking-[.56px] uppercase placeholder:font-light placeholder:tracking-[.28px] placeholder:normal-case border-b w-[300px] bg-[black]/[0]"
            )}
            type="search"
            placeholder="Введите свой запрос"
            ref={searchRef}
            id="search"
            value={formSearchValue}
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

        <div className="title relative z-20">
          <h1 className="text-[30px] text-light-turquoise font-bold tracking-[1.2px] uppercase max-sm:text-[14px]">
            Результат поиска: {formSearchValue}
          </h1>
          {searchItems.length === 0 && <NoResultsMessage />}
        </div>

        <div className="search__cards relative sm:grid sm:grid-cols-[repeat(4,_255px)] mx-auto sm:gap-7 mt-3 max-sm:flex max-sm:flex-col max-sm:gap-12">
          {searchItems.map(({ id, name, cost, imageUrl, filters }) => (
            <CardBlock
              key={id}
              id={id}
              name={name}
              cost={cost}
              imageUrl={imageUrl}
              filters={filters}
              imgClassName="h-[335px]"
            />
          ))}
        </div>
      </div>
      <DecorativeElement className="absolute -bottom-[13rem] right-[45rem] w-[879px] h-[211px] rotate-[21.097deg] bg-light-turquoise rounded-[879px] blur-[125px] max-sm:w-[258px] max-sm:h-[106px] max-sm:rotate-[21.097deg] max-sm:-left-[5rem] max-sm:-bottom-[6rem] max-sm:blur-[50px]" />
      <DecorativeElement className="absolute sm:-bottom-[10rem] sm:left-0 w-[166px] h-[353px] bg-cherry rounded-[353px] blur-[125px] max-sm:w-[184px] max-sm:h-[305px] max-sm:rotate-[32.828deg] max-sm:right-[4.3rem] max-sm:-bottom-[8rem] max-sm:blur-[75px]" />
    </div>
  );
};

export default SearchResultPage;
