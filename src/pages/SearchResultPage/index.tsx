import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classNames from "classnames";
import axios from "axios";

import { Bouquet } from "../../redux/bouquets/types";

import {
  CardBlock,
  DecorativeElement,
  NoResultsMessage,
} from "../../components";

const SearchResultPage: FC = () => {
  const { searchValue } = useParams<string>();

  const [searchItems, setSearchItems] = useState<Bouquet[]>([]);

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
        "result_search max-h-[3000px] relative bg-[#040A0A] pt-[120px] pb-20",
        { ["h-[900px]"]: searchItems.length === 0 }
      )}
    >
      <DecorativeElement className="absolute top-0 left-0 w-[217px] h-[173px] bg-light-turquoise blur-[125px]" />
      <DecorativeElement className="absolute -top-[20rem] right-0 w-[504px] h-[625px] bg-cherry rounded-[625px] blur-[125px]" />
      <div className="wrapper container mx-auto flex flex-col gap-12">
        <div className="title">
          <h1 className="text-[30px] text-light-turquoise font-bold tracking-[1.2px] uppercase">
            Результат поиска: {searchValue}
          </h1>
          {searchItems.length === 0 && <NoResultsMessage />}
        </div>

        <div className="search__cards relative grid grid-cols-[repeat(4,_255px)] mx-auto gap-7 mt-3">
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
      <DecorativeElement className="absolute -bottom-[13rem] right-[45rem] w-[879px] h-[211px] rotate-[21.097deg] bg-light-turquoise rounded-[879px] blur-[125px]" />
      <DecorativeElement className="absolute -bottom-[10rem] left-0 w-[166px] h-[353px] bg-cherry rounded-[353px] blur-[125px]" />
    </div>
  );
};

export default SearchResultPage;
