import { FC, useEffect, useState } from "react";
import axios from "axios";
import { useParams, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { Bouquet, BouquetFilters } from "../../redux/bouquets/types";
import { RootState, useAppDispatch } from "../../redux/store";

import {
  BouquetAdditionBlock,
  BouquetBlock,
  BouquetSkeletonBlock,
  BouquetSwitchBlock,
  DecorativeElement,
  SliderBlock,
} from "../../components";
import { BouquetBgTopLeft } from "../../assets";
import { setCartItem } from "../../redux/cart/slice";

const BouquetPage: FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<string>();

  const reviews = useSelector((state: RootState) => state.reviews.reviews);
  const bouquets = useSelector((state: RootState) => state.bouquets.items);

  const [bouquet, setBouquet] = useState<Bouquet | undefined>();

  useEffect(() => {
    async function fetchBouquet() {
      try {
        const { data } = await axios.get<Bouquet>(
          `https://655b76e2ab37729791a92825.mockapi.io/items/${id}`
        );

        setBouquet(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchBouquet();
  }, [id, dispatch]);

  const addToCart = (
    id: number,
    name: string,
    imageUrl: string,
    cost: number,
    count: number,
    filters: BouquetFilters
  ) => {
    const bouquet = { id, name, imageUrl, cost, count, filters };
    dispatch(setCartItem(bouquet));
  };

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
              reviewsLength={reviews.length}
            />
          </div>
          <Outlet context={id} />
        </div>

        <div className="popular_bouquets flex flex-col gap-7">
          <div className="popular_bouquets__title mt-20">
            <h1 className="text-[30px] font-bold uppercase text-light-turquoise">
              вам может понравиться:
            </h1>
          </div>
          <SliderBlock bouquets={bouquets} />
        </div>
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
