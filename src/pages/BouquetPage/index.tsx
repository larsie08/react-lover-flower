import { FC, useCallback } from "react";
import { Outlet, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { RootState, useAppDispatch } from "../../redux/store";
import { setCartItem } from "../../redux/cart/slice";
import {
  selectBouquetById,
  selectBouquetsState,
} from "../../redux/bouquets/selectors";
import { BouquetCategories, BouquetFilters } from "../../redux/bouquets/types";
import { selectFiltersState } from "../../redux/filter/selectors";

import { DecorativeElement, PathBlock, SliderBlock } from "../../components";
import {
  BouquetAdditionBlock,
  BouquetBlock,
  BouquetSkeletonBlock,
  BouquetSwitchBlock,
} from "./companents";

import { useScreenWidth } from "../../utils/useScreenWidth";

const basedPath = [
  { text: "Главная", path: "/" },
  { text: "Каталог букетов", path: "/catalog" },
];

const BouquetPage: FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<string>();
  const screenWidth = useScreenWidth();

  const { items } = useSelector(selectBouquetsState);
  const { category } = useSelector(selectFiltersState);
  const bouquet = useSelector((state: RootState) =>
    selectBouquetById(state, Number(id))
  );

  const addToCart = useCallback(
    (
      id: number,
      name: string,
      imageUrl: string,
      cost: number,
      quantity: number,
      categories: BouquetCategories,
      filters: BouquetFilters
    ) => {
      const bouquet = {
        id,
        name,
        imageUrl,
        cost,
        quantity,
        categories,
        filters,
      };
      dispatch(setCartItem(bouquet));
    },
    [dispatch, id]
  );

  return (
    <div className="bouquet_page pt-[120px] pb-[120px] relative max-lg:px-4 bg-[#040A0A]">
      <DecorativeElement className="absolute md:-top-[5rem] max-md:top-0 md:-left-[15rem] max-md:right-0 md:w-[374px] md:h-[397px] max-md:w-[220px] max-md:h-[170px] bg-[#43FFD2] rounded-full blur-[125px]" />
      <div className="bouquet_page__wrapper container mx-auto relative max-lg:flex max-lg:flex-col z-20">
        <PathBlock
          items={[
            ...basedPath,
            ...(category ? [{ text: category, path: "/catalog" }] : []),
            ...(bouquet?.name
              ? [{ text: bouquet.name, path: `/catalog/bouquet/${bouquet.id}` }]
              : []),
          ]}
        />

        {!bouquet ? (
          <BouquetSkeletonBlock />
        ) : (
          <BouquetBlock
            id={bouquet.id}
            name={bouquet.name}
            cost={bouquet.cost}
            imageUrl={bouquet.imageUrl}
            screenWidth={screenWidth}
            categories={bouquet.categories}
            filters={bouquet.filters}
            addToCart={addToCart}
          />
        )}

        <div className="bouquet_addition_order__block flex flex-col items-center mt-20 gap-11">
          <BouquetAdditionBlock />
        </div>

        <div className="switch_block mt-24">
          <div className="title flex justify-center">
            <BouquetSwitchBlock path="" name="доставка и оплата" />
            <BouquetSwitchBlock
              path="reviews"
              name="отзывы"
              reviewsLength={bouquet?.reviews ? bouquet.reviews.length : 0}
            />
          </div>
          {bouquet && <Outlet context={bouquet} />}
        </div>

        {items.length !== 0 && screenWidth >= 768 && (
          <div className="popular_bouquets flex flex-col gap-7">
            <div className="popular_bouquets__title mt-20">
              <h1 className="text-[30px] font-bold uppercase text-light-turquoise">
                вам может понравиться:
              </h1>
            </div>
            <SliderBlock bouquets={items} screenWidth={screenWidth} />
          </div>
        )}
      </div>

      <img
        className="absolute top-[60rem] right-0 max-md:hidden"
        src="./img/PagesImg/BouquetImg/leafsBg.png"
        alt="leafs"
      />

      <DecorativeElement className="absolute md:top-0 max-md:top-[10rem] md:right-0 max-md:left-0 md:w-[504px] md:h-[360px] max-md:w-[300px] max-md:h-[80px] rounded-[504px] bg-cherry md:blur-[125px] max-md:blur-[75px] max-md:rotate-[33deg]" />
      <DecorativeElement className="absolute md:top-[18rem] max-md:top-[40rem] md:left-[10rem] rotate-[32.828deg] md:w-[589px] md:h-[360px] max-md:w-[350px] max-md:h-[80px] rounded-[580px] bg-cherry md:blur-[125px] max-md:blur-[75px]" />
      <DecorativeElement className="absolute md:top-[52rem] max-md:top-[70rem] md:left-[15rem] max-md:right-0 md:rotate-[21.185deg] md:w-[560px] md:h-[255px] max-md:w-[250px] max-md:h-[255px] rounded-[560px] bg-cherry blur-[125px]" />
      <DecorativeElement className="absolute md:top-[58rem] max-md:top-[100rem] md:right-[5rem] max-md:left-0 rotate-[21.095deg] md:w-[711px] md:h-[218px] max-md:w-[220px] max-md:h-[180px] rounded-[711px] bg-light-turquoise blur-[125px]" />
      <DecorativeElement className="absolute max-md:top-[120rem] md:bottom-[-10rem] md:right-[25rem] max-md:right-0 max-md:w-[250px] md:w-[500px] md:h-[200px] max-md:h-[255px] rounded-[560px] max-md:bg-cherry md:bg-light-turquoise blur-[125px]" />
      <DecorativeElement className="absolute md:bottom-[-5rem] max-md:bottom-[-8rem] md:left-[-3rem] max-md:left-[-5rem] rotate-[21.095deg] md:w-[100px] md:h-[200px] max-md:w-[220px] max-md:h-[180px] rounded-[711px] bg-light-turquoise blur-[125px]" />
      <DecorativeElement className="absolute md:bottom-[-5rem] max-md:bottom-[-13rem] md:right-0 max-md:right-0 md:w-[300px] md:h-[350px] max-md:w-[235px] max-md:h-[413px] bg-cherry blur-[100px] rounded-[50%]" />
    </div>
  );
};

export default BouquetPage;
