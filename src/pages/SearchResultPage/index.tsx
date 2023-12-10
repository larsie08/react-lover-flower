import { FC, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { RootState, useAppDispatch } from "../../redux/store";
import { setCartItem } from "../../redux/cart/slice";
import { fetchSearchBouquets } from "../../redux/filter/asyncActions";
import { SearchFiltersParams } from "../../redux/filter/types";

import {
  CatalogCardBlock,
  DecorativeElement,
  NoResultsMessage,
} from "../../components";

const SearchResultPage: FC = () => {
  const dispatch = useAppDispatch();
  const { searchValue } = useParams<SearchFiltersParams>();
  const items = useSelector((state: RootState) => state.filter.searchItems);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchSearchBouquets({ searchValue }));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [dispatch, searchValue]);

  const onClick = useMemo(
    () => (id: number, name: string, imageUrl: string, cost: number) => {
      const bouquet = { id, name, imageUrl, cost };
      dispatch(setCartItem(bouquet));
    },
    [dispatch]
  );

  return (
    <div className="result_search max-h-[3000px] relative bg-[#040A0A] pt-[120px] pb-20">
      <DecorativeElement className="absolute top-0 left-0 w-[217px] h-[173px] bg-light-turquoise blur-[125px]" />
      <DecorativeElement className="absolute -top-[20rem] right-0 w-[504px] h-[625px] bg-cherry rounded-[625px] blur-[125px]" />
      <div className="wrapper container mx-auto flex flex-col gap-12">
        <div className="title">
          <h1 className="text-[30px] text-light-turquoise font-bold tracking-[1.2px] uppercase">
            Результат поиска: {searchValue}
          </h1>
          {items.length === 0 && <NoResultsMessage />}
        </div>

        <div className="search__cards relative grid grid-cols-[repeat(4,_255px)] mx-auto gap-7 mt-3">
          {items.map(({ id, name, cost, imageUrl }) => (
            <CatalogCardBlock
              key={id}
              id={id}
              name={name}
              cost={cost}
              imageUrl={imageUrl}
              onClick={onClick}
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
