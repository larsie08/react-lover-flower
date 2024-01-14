import { FC, useEffect, useMemo, useState } from "react";
import { useParams, Outlet, NavLink } from "react-router-dom";
import axios from "axios";

import MainLayout from "../../layout/MainLayout";

import { Bouquet } from "../../redux/bouquets/types";
import { useAppDispatch } from "../../redux/store";
import { setCartItem } from "../../redux/cart/slice";

import {
  BouquetAdditionBlock,
  BouquetBlock,
  DecorativeElement,
} from "../../components";
import { BouquetBgTopLeft } from "../../assets";

const BouquetPage: FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const [bouquet, setBouquet] = useState<Bouquet>();

  useEffect(() => {
    async function fetchBouquet() {
      try {
        const { data } = await axios.get(
          `https://655b76e2ab37729791a92825.mockapi.io/items/${id}`
        );
        setBouquet(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchBouquet();
  }, [id, dispatch]);

  const onClick = useMemo(
    () =>
      (
        id: number,
        name: string,
        imageUrl: string,
        cost: number,
        count: number
      ) => {
        const bouquet = { id, name, imageUrl, cost, count };
        dispatch(setCartItem(bouquet));
      },
    [dispatch]
  );

  if (!bouquet) return <MainLayout />;

  return (
    <div className="bouquet_page pt-[120px] h-[2200px] relative bg-[#040A0A]">
      <BouquetBgTopLeft />
      <DecorativeElement className="absolute top-0 right-0 w-[504px] h-[360px] rounded-[504px] bg-cherry blur-[125px]" />
      <DecorativeElement className="absolute top-[18rem] left-[10rem] rotate-[32.828deg] w-[589px] h-[360px] rounded-[580px] bg-cherry blur-[125px]" />
      <DecorativeElement className="absolute top-[52rem] left-[15rem] rotate-[21.185deg] w-[560px] h-[255px] rounded-[560px] bg-cherry blur-[125px]" />
      <DecorativeElement className="absolute top-[58rem] right-[5rem] rotate-[21.095deg] w-[711px] h-[218px] rounded-[711px] bg-light-turquoise blur-[125px]" />
      <div className="bouquet_page__wrapper container mx-auto relative z-20">
        <div className="title text-[12px] font-normal tracking-[0.48px] uppercase">
          Главная / Каталог букетов / Популярное / {bouquet.name}
        </div>
        <BouquetBlock
          id={bouquet.id}
          name={bouquet.name}
          cost={bouquet.cost}
          imageUrl={bouquet.imageUrl}
          onClick={onClick}
        />
        <div className="bouquet_addition_order__block flex flex-col items-center mt-20 gap-11">
          <BouquetAdditionBlock />
        </div>
        <div className="switch_block mt-24">
          <div className="title flex justify-center">
            <NavLink
              to=""
              end
              className={({ isActive }) =>
                isActive
                  ? "w-[358px] flex flex-col justify-center border-b-[3px] rounded-[2px] text-light-turquoise"
                  : "w-[358px] flex flex-col justify-center border-b-[1px] text-[#555555] hover:text-light-turquoise"
              }
            >
              <h1 className="text-[20px] text-center font-light tracking-[0.8px] uppercase pb-7">
                доставка и оплата
              </h1>
            </NavLink>
            <NavLink
              to="reviews"
              end
              className={({ isActive }) =>
                isActive
                  ? "w-[358px] flex flex-col justify-center border-b-[3px] rounded-[2px] text-light-turquoise"
                  : "w-[358px] flex flex-col justify-center border-b-[1px] text-[#555555] hover:text-light-turquoise"
              }
            >
              <h1 className="text-[20px] text-center font-light tracking-[0.8px] uppercase pb-7">
                отзывы
              </h1>
            </NavLink>
          </div>
          <Outlet context={bouquet.name} />
        </div>
      </div>
      <img
        className="absolute bottom-4 right-0"
        src="./img/bgElements/BouquetBg/leafsBg.png"
        alt="leafs"
      />
    </div>
  );
};

export default BouquetPage;
