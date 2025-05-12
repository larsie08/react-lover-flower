import { FC, useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { useAppDispatch } from "../../redux/store";
import { SortType } from "../../redux/filter/types";
import { setCategory, setSortValue } from "../../redux/filter/slice";
import { selectFiltersState } from "../../redux/filter/selectors";
import { selectBouquetsState } from "../../redux/bouquets/selectors";
import { selectCartState } from "../../redux/cart/selectors";
import { setModalState } from "../../redux/modal/slice";
import { ModalType } from "../../redux/modal/types";

import { DecorativeElement, CardBlock, SkeletonCard } from "../../components";
import {
  CatalogAdaptiveMenuBlock,
  CatalogCategoryBlock,
  CatalogFilterBlock,
  CatalogRightSideBlock,
  CatalogSortBlock,
  CatalogTitleBlock,
} from "./companents";
import { CatalogLeftSvg, CatalogRightSvg } from "../../assets";

const skeletons = [...new Array(9)].map((_, index) => (
  <SkeletonCard key={index} />
));

const CatalogPage: FC = () => {
  const dispatch = useAppDispatch();

  const [screenWidth, setScreenWidth] = useState(window.outerWidth);

  const { category, sortOption } = useSelector(selectFiltersState);
  const { items, status } = useSelector(selectBouquetsState);
  const { cartItems } = useSelector(selectCartState);
  const [blockId, setBlockId] = useState<number | null>(null);

  const onClickCategory = useCallback(
    (category: string) => {
      dispatch(setCategory({ category }));
    },
    [dispatch]
  );

  const handleSortValue = useCallback(
    (selectedOption: SortType) => {
      dispatch(setSortValue(selectedOption));
    },
    [dispatch]
  );

  const onClear = useCallback(() => {
    dispatch(setCategory({ category: "" }));
  }, [dispatch]);

  const openModal = useCallback(
    () => dispatch(setModalState({ modalType: ModalType.Modal, isOpen: true })),
    [dispatch]
  );
  const openCart = useCallback(
    () => dispatch(setModalState({ modalType: ModalType.Cart, isOpen: true })),
    [dispatch]
  );

  const onClickAdaptiveBlock = useCallback(
    (id: number) => {
      setBlockId((prevId) => (prevId === id ? null : id));
    },
    [dispatch]
  );

  const handleScreenWidth = () => setScreenWidth(window.outerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleScreenWidth);

    return () => {
      window.removeEventListener("resize", handleScreenWidth);
    };
  }, []);

  return (
    <div className="catalog_page relative pt-[120px] pb-[200px] bg-[#040A0A]">
      <picture>
        <source
          srcSet="./img/PagesImg/CatalogImg/AdaptiveFlowerLeft.png 640w"
          media="(max-width: 767px)"
        />
        <img
          className="absolute md:top-0 left-0 md:w-[700px] md:h-[700px] max-md:w-[80px] max-md:h-[150px] max-md:top-[14rem] z-20"
          src="./img/PagesImg/CatalogImg/CatalogFlowerLeft.png"
          srcSet="./img/PagesImg/CatalogImg/CatalogFlowerLeft.png 1280w, ./img/PagesImg/CatalogImg/AdaptiveFlowerLeft.png 640w"
          loading="lazy"
          alt="flower"
        />
      </picture>

      <DecorativeElement className="absolute lg:top-0 max-lg:top-[10rem] lg:right-0 max-lg:left-0 lg:w-[393px] lg:h-[280px] max-lg:h-[90px] max-lg:w-[200px] bg-cherry rounded-[393px] max-lg:rotate-[33deg] lg:blur-[125px] max-lg:blur-[100px] select-none" />
      <DecorativeElement className="absolute top-[35rem] right-[15rem] w-[435px] h-[257px] rotate-[32.828deg] bg-cherry rounded-[435px] blur-[125px] select-none" />
      <DecorativeElement className="absolute top-[25rem] left-[5rem] w-[505px] h-[360px] rotate-[32.828deg] bg-cherry rounded-[505px] blur-[125px] select-none max-lg:hidden" />
      <DecorativeElement className="absolute top-[50rem] left-0 w-[505px] h-[360px] rotate-[32.828deg] bg-cherry rounded-[505px] blur-[125px] select-none max-lg:hidden" />
      <DecorativeElement className="absolute lg:top-[95rem] max-lg:top-[65rem] left-0 lg:w-[750px] lg:h-[175px] -rotate-[71.859deg] bg-light-turquoise rounded-[750px] blur-[125px] select-none max-lg:h-[180px] max-lg:w-[300px] max-sm:w-[200px]" />

      <picture>
        <source
          srcSet="./img/PagesImg/CatalogImg/AdaptiveFlowerRight.png 640w"
          media="(max-width: 767px)"
        />
        <img
          className="absolute lg:top-0 right-0 md:w-[700px] md:h-[1100px] max-md:w-[150px] max-md:h-[220px] max-md:top-[7rem]"
          src="./img/PagesImg/CatalogImg/CatalogFlowerRight.png"
          srcSet="./img/PagesImg/CatalogImg/CatalogFlowerRight.png 1280w, ./img/PagesImg/CatalogImg/AdaptiveFlowerRight.png 640w"
          loading="lazy"
          alt="flower"
        />
      </picture>

      <div className="catalog_page__wrapper container mx-auto">
        <div className="flex justify-between">
          <CatalogTitleBlock
            screenWidth={screenWidth}
            categoryId={category}
            onClickCategory={onClickCategory}
          />
          {screenWidth >= 1024 && (
            <CatalogRightSideBlock
              openModal={openModal}
              openCart={openCart}
              cartItems={cartItems}
            />
          )}
        </div>
        <div className="catalog_page__content flex flex-col mt-8">
          <div className="flex justify-between relative z-30">
            {screenWidth >= 768 && (
              <CatalogCategoryBlock categoryId={category} onClear={onClear} />
            )}
            {screenWidth >= 768 && (
              <CatalogSortBlock
                sortValue={sortOption}
                screenWidth={screenWidth}
                handleSortValue={handleSortValue}
              />
            )}
            {screenWidth <= 768 && (
              <CatalogAdaptiveMenuBlock
                blockId={blockId}
                screenWidth={screenWidth}
                category={category}
                sortValue={sortOption}
                handleSortValue={handleSortValue}
                onClickAdaptiveBlock={onClickAdaptiveBlock}
                onClickCategory={onClickCategory}
              />
            )}
          </div>
          <div className="flex">
            {screenWidth >= 768 && (
              <div className="catalog_page__sticky w-[255px]">
                <CatalogFilterBlock />
              </div>
            )}
            <div className="catalog_page__cards relative grid lg:grid-cols-[repeat(3,_255px)] max-lg:grid-cols-[repeat(2,_255px)] max-md:grid-cols-[repeat(1,_255px)] mx-auto gap-x-7 gap-y-14 mt-3">
              {status === "error" ? (
                <h1 className="mt-4 text-[18px] font-normal uppercase w-[600px]">
                  Ничего по данному запросу не найдено
                </h1>
              ) : status === "success" ? (
                items.map((bouquet) => (
                  <CardBlock
                    key={bouquet.name}
                    id={bouquet.id}
                    name={bouquet.name}
                    cost={bouquet.cost}
                    imageUrl={bouquet.imageUrl}
                    filters={bouquet.filters}
                    categories={bouquet.categories}
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
      <DecorativeElement className="absolute -bottom-[13rem] right-[15rem] w-[800px] h-[212px] rotate-[21.097deg] bg-light-turquoise rounded-[880px] blur-[125px] select-none z-0" />
      <CatalogRightSvg />
    </div>
  );
};

export default CatalogPage;
