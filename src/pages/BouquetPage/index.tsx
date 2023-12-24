import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import MainLayout from "../../layout/MainLayout";

import { Bouquet } from "../../redux/bouquets/types";
import { useAppDispatch } from "../../redux/store";
import { setCartItem } from "../../redux/cart/slice";

import { BouquetBlock } from "../../components";

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

  const onClick = (
    id: number,
    name: string,
    imageUrl: string,
    cost: number,
    count?: number
  ) => {
    const bouquet = { id, name, imageUrl, cost, count };
    dispatch(setCartItem(bouquet));
  };

  if (!bouquet) return <MainLayout />;

  return (
    <div className="bouquet_page pt-[120px] h-[1000px] relative bg-[#040A0A]">
      <div className="bouquet_page__wrapper container mx-auto">
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
      </div>
    </div>
  );
};

export default BouquetPage;
