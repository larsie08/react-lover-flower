import { FC, useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { useAppDispatch } from "../../redux/store";
import { selectBouquetItems } from "../../redux/bouquets/selectors";
import { selectCartItems } from "../../redux/cart/selectors";
import { setModalState } from "../../redux/modal/slice";
import { ModalType } from "../../redux/modal/types";

import { CardBlock, DecorativeElement, SliderBlock } from "../../components";
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

const Home: FC = () => {
  const dispatch = useAppDispatch();

  const cart = useSelector(selectCartItems);
  const bouquets = useSelector(selectBouquetItems);

  const [screenWidth, setScreenWidth] = useState(window.outerWidth);

  const openModal = useCallback(
    () => dispatch(setModalState({ modalType: ModalType.Modal, isOpen: true })),
    [dispatch]
  );
  const openCart = useCallback(
    () => dispatch(setModalState({ modalType: ModalType.Cart, isOpen: true })),
    [dispatch]
  );

  const handleScreenWidth = () => setScreenWidth(window.outerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleScreenWidth);

    return () => {
      window.removeEventListener("resize", handleScreenWidth);
    };
  }, []);

  return (
    <div className="wrapper bg-[#040A0A]">
      <Intro
        cart={cart}
        openCart={openCart}
        openModal={openModal}
        screenWidth={screenWidth}
      />

      <CatalogBlock />

      <div className="popular_bouquets relative w-full h-full">
        {screenWidth > 425 && (
          <DecorativeElement className="absolute right-0 z-10 w-[60%] h-[750px] bg-[url('./img/PagesImg/HomeImg/IntroImg/BouquetsBG.png')]" />
        )}
        {screenWidth > 425 && <PopularLightSvg />}
        {screenWidth > 425 && <PopularCherrySvg />}

        <div className="popular_bouquets__wrapper relative container mx-auto max-sm:flex max-sm:flex-col max-sm:mt-[6rem]">
          <BouquetsTitleBlock />
          {screenWidth > 425 ? (
            <SliderBlock bouquets={bouquets} />
          ) : (
            <div className="flex flex-col items-center gap-10 mt-6">
              {bouquets.slice(0, 3).map((bouquet) => (
                <CardBlock
                  id={bouquet.id}
                  name={bouquet.name}
                  cost={bouquet.cost}
                  imageUrl={bouquet.imageUrl}
                  filters={bouquet.filters}
                  imgClassName={"h-[335px] w-[300px]"}
                />
              ))}
            </div>
          )}

          <div className="popular_bouquets__link flex items-center mt-16 ml-3">
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
      <OccasionBlock screenWidth={screenWidth} />
      <QuestionBlock screenWidth={screenWidth} />
      <CardFooterBlock screenWidth={screenWidth} />
    </div>
  );
};

export default Home;
