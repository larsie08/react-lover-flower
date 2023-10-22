import { FC } from "react";

import {
  PopularCherrySvg,
  LeftArrowSvg,
  PopularLightSvg,
  PinkArrowSvg,
  RightArrowSvg,
} from "../../../assets";

const imgLinks = [
  "./img/bouquets/bouquet1.png",
  "./img/bouquets/bouquet2.png",
  "./img/bouquets/bouquet3.png",
];

export const PopularBouquetsBlock: FC = () => {
  return (
    <div className="popular_bouquets relative w-full h-[1300px]">
      <img
        className="absolute right-0 z-10 cover bg-no-repeat h-[750px] w-[60%]"
        src="./img/bgElements/BouquetsBG.png"
        alt="BouquetsBG"
      />

      <PopularLightSvg />
      <PopularCherrySvg />

      <div className="popular_bouquets__wrapper relative container mx-auto">
        <div className="popular_bouquets__title flex flex-col">
          <h1 className="title relative z-20 flex items-center h-[100px] text-[100px] font-normal tracking-[2px] uppercase font-cormorant">
            Популярные
          </h1>
          <h2 className="title relative z-20 flex justify-center items-center h-[100px] text-[100px] font-normal tracking-[2px] uppercase font-cormorant">
            букеты
          </h2>
          <h3 className="subtitle relative z-20 flex justify-center items-center mt-5 text-[20px] font-light tracking-[.4px]">
            Самые любимые композиции наших клиентов
          </h3>
        </div>
        <div className="popular_bouquets__slider mt-20 grid grid-cols-[80px_repeat(3,_350px)_80px] gap-8 items-center justify-center">
          <div className="arrow mb-14 relative z-10">
            <LeftArrowSvg />
          </div>
          {imgLinks.map((img, i) => (
            <div key={i} className="slider__cart">
              <img
                className="cart__img bg-[lightgray]/[50%] w-[350px] h-[450px] relative z-20"
                src={img}
                alt="bouquet"
              />
              <h1 className="cart__title relative z-10 mt-2 text-[20px] font-normal tracking-[.8px] uppercase">
                лучший день
              </h1>
              <h2 className="cart__price relative z-10 mt-2 text-[14px] font-bold tracking-[.56px]">
                167.000 ₽
              </h2>
              <button className="border-[.5px] w-[255px] mt-6 p-4 text-[12px] font-bold tracking-[1.2px] uppercase hover:bg-light-turquoise hover:text-[black] focus:border-light-turquoise active:shadow-[0_0_10px_0_#01281F_inset]">
                В корзину
              </button>
            </div>
          ))}
          <div className="arrow mb-14 relative z-10">
            <RightArrowSvg />
          </div>
        </div>
        <div className="popular_bouquets__link flex items-center mt-16">
          <h3 className="link text-[12px] text-pink font-bold tracking-[1.2px] uppercase underline">
            смотреть весь каталог
          </h3>
          <PinkArrowSvg />
        </div>
      </div>
    </div>
  );
};
