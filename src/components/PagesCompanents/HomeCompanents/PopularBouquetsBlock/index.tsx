import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { RootState, useAppDispatch } from "../../../../redux/store";
import { setCartItem } from "../../../../redux/cart/slice";
import { Bouquet } from "../../../../redux/bouquets/types";

import {
  PopularCherrySvg,
  LeftArrowSvg,
  PopularLightSvg,
  PinkArrowSvg,
  RightArrowSvg,
} from "../../../../assets";

import { BouquetsTitleBlock, PopularCardBlock } from "./BouquetsComponents";

export const PopularBouquetsBlock: FC = () => {
  const dispatch = useAppDispatch();
  const items = useSelector((state: RootState) => state.bouquets.items);
  const [slideItems, setSlideItems] = useState<Bouquet[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(1);

  useEffect(() => {
    setSlideItems(items.slice(currentIndex, currentIndex + 3));
  }, [items, currentIndex]);

  const nextSlide = () => {
    if (currentIndex < items.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const onClick = (
    id: number,
    name: string,
    imageUrl: string,
    cost: number,
    count: number
  ) => {
    const bouquet = { id, name, cost, imageUrl, count };
    dispatch(setCartItem(bouquet));
  };

  return (
    <div className="popular_bouquets relative w-full h-[1300px]">
      <img
        className="absolute right-0 z-10 cover bg-no-repeat h-[750px] w-[60%]"
        src="./img/bgElements/HomeBg/BouquetsBG.png"
        alt="BouquetsBG"
      />

      <PopularLightSvg />
      <PopularCherrySvg />

      <div className="popular_bouquets__wrapper relative container mx-auto">
        <BouquetsTitleBlock />
        <div className="popular_bouquets__slider mt-20 gap-8 flex items-center justify-center">
          <div
            onClick={prevSlide}
            className="arrow mb-14 relative z-10 cursor-pointer select-none"
          >
            <LeftArrowSvg />
          </div>
          <div className="grid grid-cols-[repeat(3,_350px)] gap-8">
            {slideItems.map((obj) => (
              <PopularCardBlock
                key={obj.id}
                id={obj.id}
                name={obj.name}
                imageUrl={obj.imageUrl}
                cost={obj.cost}
                onClick={onClick}
              />
            ))}
          </div>

          <div
            onClick={nextSlide}
            className="arrow mb-14 relative z-10 cursor-pointer select-none"
          >
            <RightArrowSvg />
          </div>
        </div>
        <div className="popular_bouquets__link flex items-center mt-16">
          <Link
            to="catalog"
            className="link text-[12px] text-pink font-bold tracking-[1.2px] uppercase underline"
          >
            смотреть весь каталог
          </Link>
          <PinkArrowSvg />
        </div>
      </div>
    </div>
  );
};
