import { FC, useCallback } from "react";
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

  const { category, sortOption } = useSelector(selectFiltersState);
  const { items, status } = useSelector(selectBouquetsState);
  const { cartItems } = useSelector(selectCartState);

  const onClick = useCallback(
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

  return (
    <div className="catalog_page relative pt-[120px] pb-[200px] bg-[#040A0A]">
      <img
        className="absolute top-0 left-0 z-10"
        src="./img/PagesImg/CatalogImg/CatalogFlowerLeft.png"
      />
      <DecorativeElement className="absolute top-0 right-0 w-[393px] h-[280px] bg-cherry rounded-[393px] blur-[125px] select-none" />
      <DecorativeElement className="absolute top-[35rem] right-[15rem] w-[435px] h-[257px] rotate-[32.828deg] bg-cherry rounded-[435px] blur-[125px] select-none" />
      <DecorativeElement className="absolute top-[25rem] left-[5rem] w-[505px] h-[360px] rotate-[32.828deg] bg-cherry rounded-[505px] blur-[125px] select-none" />
      <DecorativeElement className="absolute top-[50rem] left-0 w-[505px] h-[360px] rotate-[32.828deg] bg-cherry rounded-[505px] blur-[125px] select-none" />
      <DecorativeElement className="absolute top-[95rem] left-0 w-[750px] h-[175px] -rotate-[71.859deg] bg-light-turquoise rounded-[750px] blur-[125px] select-none" />
      <img
        className="absolute top-0 right-0"
        src="./img/PagesImg/CatalogImg/CatalogFlowerRight.png"
      />
      <div className="catalog_page__wrapper container mx-auto">
        <div className="flex justify-between">
          <CatalogTitleBlock categoryId={category} onClick={onClick} />
          <CatalogRightSideBlock
            openModal={openModal}
            openCart={openCart}
            cartItems={cartItems}
          />
        </div>
        <div className="catalog_page__content flex flex-col mt-8">
          <div className="flex justify-between relative z-30">
            <CatalogCategoryBlock categoryId={category} onClear={onClear} />
            <CatalogSortBlock
              sortValue={sortOption}
              handleSortValue={handleSortValue}
            />
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
