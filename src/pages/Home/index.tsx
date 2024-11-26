import { FC, useCallback } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { RootState, useAppDispatch } from "../../redux/store";
import { setIsOpenCart, setIsOpenModal } from "../../redux/modal/slice";

import { SliderBlock } from "../../components";
import {
  BouquetsTitleBlock,
  CardFooterBlock,
  CatalogBlock,
  HomeOrderBlock,
  Intro,
  OccasionBlock,
  QuestionBlock,
} from "./companents";

import { PinkArrowSvg, PopularCherrySvg, PopularLightSvg } from "../../assets";
import { selectBouquetItems } from "../../redux/bouquets/selectors";
import { selectCartItems } from "../../redux/cart/selectors";

const Home: FC = () => {
  const dispatch = useAppDispatch();

  const cart = useSelector((state: RootState) => selectCartItems(state));
  const bouquets = useSelector((state: RootState) => selectBouquetItems(state));

  const openModal = useCallback(
    () => dispatch(setIsOpenModal(true)),
    [dispatch]
  );
  const openCart = useCallback(() => dispatch(setIsOpenCart(true)), [dispatch]);

  return (
    <div className="wrapper bg-[#040A0A]">
      <Intro cart={cart} openCart={openCart} openModal={openModal} />
      <CatalogBlock />

      <div className="popular_bouquets relative w-full h-[1300px]">
        <div className="absolute right-0 z-10 w-[60%] h-[750px] bg-[url('./img/PagesImg/HomeImg/IntroImg/BouquetsBG.png')]" />

        <PopularLightSvg />
        <PopularCherrySvg />

        <div className="popular_bouquets__wrapper relative container mx-auto">
          <BouquetsTitleBlock />
          <SliderBlock bouquets={bouquets} />
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
