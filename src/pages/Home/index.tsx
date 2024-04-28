import { FC } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { RootState, useAppDispatch } from "../../redux/store";
import { setIsOpenCart, setIsOpenModal } from "../../redux/modal/slice";

import {
  HomeOrderBlock,
  CardFooterBlock,
  CatalogBlock,
  Intro,
  OccasionBlock,
  QuestionBlock,
  BouquetsTitleBlock,
  SliderBlock,
} from "../../components";
import { PinkArrowSvg, PopularCherrySvg, PopularLightSvg } from "../../assets";

const Home: FC = () => {
  const dispatch = useAppDispatch();

  const cart = useSelector((state: RootState) => state.cart.items);
  const bouquets = useSelector((state: RootState) => state.bouquets.items);

  const openModal = () => dispatch(setIsOpenModal(true));
  const openCart = () => dispatch(setIsOpenCart(true));

  return (
    <div className="wrapper bg-[#040A0A]">
      <Intro cart={cart} openCart={openCart} openModal={openModal} />
      <CatalogBlock />

      <div className="popular_bouquets relative w-full h-[1300px]">
        <img
          className="absolute right-0 z-10 cover bg-no-repeat h-[750px] w-[60%]"
          src="./img/PagesImg/HomeImg/IntroImg/BouquetsBG.png"
          alt="BouquetsBG"
        />

        <PopularLightSvg />
        <PopularCherrySvg />

        <div className="popular_bouquets__wrapper relative container mx-auto">
          <BouquetsTitleBlock />
          <SliderBlock bouquets={bouquets} showCatalog={true} />
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

      <HomeOrderBlock />
      <OccasionBlock />
      <QuestionBlock />
      <CardFooterBlock />
    </div>
  );
};

export default Home;
