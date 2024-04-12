import { FC, memo, useEffect } from "react";
import { useSelector } from "react-redux";

import { RootState, useAppDispatch } from "../../redux/store";
import { fetchBouquets } from "../../redux/bouquets/asyncActions";
import { setConfirm } from "../../redux/filter/slice";

import {
  CatalogCategoryBlock,
  CatalogFilterBlock,
  CatalogSortBlock,
  CatalogTitleBlock,
  DecorativeElement,
  CardBlock,
  CatalogRightSideBlock,
  SkeletonCard,
} from "../../components";
import { CatalogLeftSvg, CatalogRightSvg } from "../../assets";

const CatalogPage: FC = memo(() => {
  const dispatch = useAppDispatch();

  const { items, status } = useSelector((state: RootState) => state.bouquets);
  const sortBy = useSelector(
    (state: RootState) => state.filter.sort.sortProperty
  );
  const { categoryId, isConfirm, filtersId } = useSelector(
    (state: RootState) => state.filter
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchBouquets({ sortBy, categoryId, filtersId }));
        dispatch(setConfirm(false));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [dispatch, sortBy, categoryId, isConfirm]);

  const skeletons = [...new Array(9)].map((_, index) => (
    <SkeletonCard key={index} />
  ));

  return (
    <div className="catalog_page relative pt-[120px] pb-[200px] max-h-[3000px] bg-[#040A0A]">
      <img
        className="absolute top-0 left-0 z-10"
        src="./img/PagesImg/CatalogImg/CatalogFlowerLeft.png"
      />
      <DecorativeElement className="absolute top-0 right-0 w-[393px] h-[280px] bg-cherry rounded-[393px] blur-[125px]" />
      <DecorativeElement className="absolute top-[35rem] right-[15rem] w-[435px] h-[257px] rotate-[32.828deg] bg-cherry rounded-[435px] blur-[125px]" />
      <DecorativeElement className="absolute top-[25rem] left-[5rem] w-[505px] h-[360px] rotate-[32.828deg] bg-cherry rounded-[505px] blur-[125px]" />
      <DecorativeElement className="absolute top-[50rem] left-0 w-[505px] h-[360px] rotate-[32.828deg] bg-cherry rounded-[505px] blur-[125px]" />
      <DecorativeElement className="absolute top-[95rem] left-0 w-[750px] h-[175px] -rotate-[71.859deg] bg-light-turquoise rounded-[750px] blur-[125px]" />
      <img
        className="absolute top-0 right-0"
        src="./img/PagesImg/CatalogImg/CatalogFlowerRight.png"
      />
      <div className="catalog_page__wrapper container mx-auto">
        <div className="flex justify-between">
          <CatalogTitleBlock />
          <CatalogRightSideBlock />
        </div>
        <div className="catalog_page__content flex flex-col mt-8">
          <div className="flex justify-between relative z-30">
            <CatalogCategoryBlock />
            <CatalogSortBlock />
          </div>
          <div className="flex">
            <div className="catalog_page__sticky w-[255px]">
              <CatalogFilterBlock />
            </div>
            <div className="catalog_page__cards relative grid grid-cols-[repeat(3,_255px)] mx-auto gap-x-7 gap-y-14 mt-3">
              {status === "error" ? (
                <h1 className="mt-4 text-[18px] font-normal uppercase w-[600px]">
                  Ничего по данному запросу не найдено
                </h1>
              ) : status === "success" ? (
                items.map((obj) => (
                  <CardBlock
                    key={obj.id}
                    id={obj.id}
                    name={obj.name}
                    cost={obj.cost}
                    imageUrl={obj.imageUrl}
                    filters={obj.filters}
                    imgClassName="h-[335px]"
                  />
                ))
              ) : (
                skeletons
              )}
            </div>
          </div>
        </div>
      </div>
      <CatalogLeftSvg />
      <DecorativeElement className="absolute -bottom-[13rem] right-[15rem] w-[880px] h-[212px] rotate-[21.097deg] bg-light-turquoise rounded-[880px] blur-[125px]" />
      <CatalogRightSvg />
    </div>
  );
});

export default CatalogPage;
