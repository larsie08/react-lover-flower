import { FC, useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { useAppDispatch } from "../../redux/store";
import { selectBouquetsState } from "../../redux/bouquets/selectors";
import { selectCartState } from "../../redux/cart/selectors";
import { setModalState } from "../../redux/modal/slice";
import { ModalType } from "../../redux/modal/types";

import { CardBlock, DecorativeElement, SliderBlock } from "../../components";
import {
  CardFooterBlock,
  CatalogBlock,
  HomeOrderBlock,
  Intro,
  OccasionBlock,
  QuestionBlock,
} from "./companents";

import { PinkArrowSvg } from "../../assets";
import { HomeTitleBlock } from "./companents/TitleBlock";

const HOME_TITLE_CLASSNAME =
  "title relative z-20 flex items-center h-[100px] text-[100px] font-normal tracking-[2px] uppercase font-cormorant max-lg:text-[40px] max-lg:tracking-[0.02em] max-lg:h-[50px]";

const HOME_SUBTITLE_CLASSNAME =
  "subtitle relative z-20 flex justify-center items-center sm:mt-5 text-[20px] font-light tracking-[.4px] sm:mb-20 max-lg:text-[14px] max-lg:tracking-[0.04em]";

const HOME_CENTERED_CLASSNAME = `${HOME_TITLE_CLASSNAME} justify-center`;

const renderTitleText = () => {
  return (
    <>
      <h3
        data-aos="fade-right"
        data-aos-duration="2000"
        data-aos-offset="300"
        className={HOME_SUBTITLE_CLASSNAME}
      >
        Самые любимые композиции наших клиентов
      </h3>
    </>
  );
};

const Home: FC = () => {
  const dispatch = useAppDispatch();

  const { cartItems } = useSelector(selectCartState);
  const { items } = useSelector(selectBouquetsState);

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
        cart={cartItems}
        openCart={openCart}
        openModal={openModal}
        screenWidth={screenWidth}
      />

      <CatalogBlock />

      <div className="popular_bouquets relative">
        {screenWidth > 768 && (
          <DecorativeElement className="absolute right-0 z-10 w-[60%] h-[750px] bg-[url('./img/PagesImg/HomeImg/IntroImg/BouquetsBG.png')]" />
        )}
        {screenWidth > 768 && (
          <DecorativeElement className="absolute left-0 z-10 h-[800px] w-[500px] bg-[#43FFD2]/[0.47] blur-[125px] rounded-[40%]" />
        )}
        {screenWidth > 768 && (
          <DecorativeElement className="absolute top-[22rem] right-[30rem] max-[1440px]:right-[13rem] z-0 h-[1007px] w-[1001px] bg-[#7D2253]/[0.46] blur-[125px] rounded-[40%]" />
        )}

        <div className="popular_bouquets__wrapper relative container mx-auto max-lg:flex max-lg:flex-col max-lg:mt-[6rem]">
          {/* <BouquetsTitleBlock /> */}
          <HomeTitleBlock
            title="Популярные"
            subtitle="букеты"
            animation="fade-right"
            titleClassName={HOME_TITLE_CLASSNAME}
            subtitleClassName={HOME_CENTERED_CLASSNAME}
            renderTitleText={renderTitleText}
          />
          {screenWidth > 500 ? (
            <SliderBlock bouquets={items} screenWidth={screenWidth} />
          ) : (
            <div className="flex flex-col items-center gap-10 mt-6">
              {items.slice(0, 3).map((bouquet) => (
                <CardBlock
                  id={bouquet.id}
                  name={bouquet.name}
                  cost={bouquet.cost}
                  imageUrl={bouquet.imageUrl}
                  filters={bouquet.filters}
                  categories={bouquet.categories}
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
