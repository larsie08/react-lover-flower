import { FC, useCallback, useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { RootState, useAppDispatch } from "../../redux/store";
import { setCartItem } from "../../redux/cart/slice";
import {
  selectBouquetById,
  selectBouquetsState,
} from "../../redux/bouquets/selectors";
import { BouquetCategories, BouquetFilters } from "../../redux/bouquets/types";

import { DecorativeElement, SliderBlock } from "../../components";
import {
  BouquetAdditionBlock,
  BouquetBlock,
  BouquetSkeletonBlock,
  BouquetSwitchBlock,
} from "./companents";

import { BouquetBgTopLeft } from "../../assets";

const BouquetPage: FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<string>();

  const { items } = useSelector(selectBouquetsState);
  const bouquet = useSelector((state: RootState) =>
    selectBouquetById(state, Number(id))
  );

  const [screenWidth, setScreenWidth] = useState(window.outerWidth);

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

  const handleScreenWidth = () => setScreenWidth(window.outerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleScreenWidth);

    return () => {
      window.removeEventListener("resize", handleScreenWidth);
    };
  }, []);

  return (
    <div className="bouquet_page pt-[120px] pb-[120px] relative bg-[#040A0A]">
      <BouquetBgTopLeft />
      <div className="bouquet_page__wrapper container mx-auto relative z-20">
        <div className="title text-[12px] font-normal tracking-[0.48px] uppercase">
          Главная / Каталог букетов / Популярное / {bouquet?.name}
        </div>

        {!bouquet ? (
          <BouquetSkeletonBlock />
        ) : (
          <BouquetBlock
            id={bouquet.id}
            name={bouquet.name}
            cost={bouquet.cost}
            imageUrl={bouquet.imageUrl}
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

        {items.length !== 0 && (
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
        className="absolute top-[60rem] right-0"
        src="./img/PagesImg/BouquetImg/leafsBg.png"
        alt="leafs"
      />
      <DecorativeElement className="absolute top-0 right-0 w-[504px] h-[360px] rounded-[504px] bg-cherry blur-[125px]" />
      <DecorativeElement className="absolute top-[18rem] left-[10rem] rotate-[32.828deg] w-[589px] h-[360px] rounded-[580px] bg-cherry blur-[125px]" />
      <DecorativeElement className="absolute top-[52rem] left-[15rem] rotate-[21.185deg] w-[560px] h-[255px] rounded-[560px] bg-cherry blur-[125px]" />
      <DecorativeElement className="absolute top-[58rem] right-[5rem] rotate-[21.095deg] w-[711px] h-[218px] rounded-[711px] bg-light-turquoise blur-[125px]" />
    </div>
  );
};

export default BouquetPage;
