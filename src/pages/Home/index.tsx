import { FC, useCallback } from "react";
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
import { motion } from "framer-motion";
import { useScreenWidth } from "../../utils/useScreenWidth";

const HOME_TITLE_CLASSNAME =
  "title relative z-20 flex items-center h-[100px] text-[100px] font-normal tracking-[2px] uppercase font-cormorant max-lg:text-[40px] max-lg:tracking-[0.02em] max-lg:h-[50px]";

const HOME_SUBTITLE_CLASSNAME =
  "subtitle relative z-20 flex justify-center items-center sm:mt-5 text-[20px] font-light tracking-[.4px] sm:mb-20 max-lg:text-[14px] max-lg:tracking-[0.04em]";

const HOME_CENTERED_CLASSNAME = `${HOME_TITLE_CLASSNAME} justify-center`;

const renderTitleText = () => {
  return (
    <>
      <motion.h3
        initial={{
          opacity: 0,
          y: useScreenWidth() <= 768 ? 100 : 0,
          x: useScreenWidth() >= 768 ? -100 : 0,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          x: 0,
        }}
        transition={{ duration: useScreenWidth() >= 768 ? 2 : 1 }}
        viewport={{ once: true, amount: 0.2 }}
        className={HOME_SUBTITLE_CLASSNAME}
      >
        Самые любимые композиции наших клиентов
      </motion.h3>
    </>
  );
};

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const screenWidth = useScreenWidth();

  const { cartItems } = useSelector(selectCartState);
  const { items } = useSelector(selectBouquetsState);

  const openModal = useCallback(
    (type: ModalType) =>
      dispatch(setModalState({ modalType: type, isOpen: true })),
    [dispatch],
  );

  return (
    <div className="wrapper bg-[#040A0A]">
      <Intro cart={cartItems} openModal={openModal} screenWidth={screenWidth} />

      <CatalogBlock screenWidth={screenWidth} />

      <div className="popular_bouquets relative">
        {screenWidth > 768 && (
          <DecorativeElement className="absolute right-0 z-10 h-[750px] w-[60%] bg-[url('./img/PagesImg/HomeImg/IntroImg/BouquetsBG.png')]" />
        )}
        {screenWidth > 768 && (
          <DecorativeElement className="absolute left-0 z-10 h-[800px] w-[500px] rounded-[40%] bg-[#43FFD2]/[0.47] blur-[125px]" />
        )}
        {screenWidth > 768 && (
          <DecorativeElement className="absolute right-[30rem] top-[22rem] z-0 h-[1007px] w-[1001px] rounded-[40%] bg-[#7D2253]/[0.46] blur-[125px] max-[1440px]:right-[13rem]" />
        )}

        <div className="popular_bouquets__wrapper container relative mx-auto max-lg:mt-[6rem] max-lg:flex max-lg:flex-col">
          <HomeTitleBlock
            title="Популярные"
            subtitle="букеты"
            animation={screenWidth >= 768 ? "fade-right" : "fade-bottom"}
            titleClassName={HOME_TITLE_CLASSNAME}
            subtitleClassName={HOME_CENTERED_CLASSNAME}
            renderTitleText={renderTitleText}
          />
          {screenWidth > 500 ? (
            <SliderBlock bouquets={items} screenWidth={screenWidth} />
          ) : (
            <div className="mt-6 flex flex-col items-center gap-10">
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

          <div className="popular_bouquets__link ml-3 mt-16 flex items-center">
            <Link
              to="catalog"
              className="link text-[12px] font-bold uppercase tracking-[1.2px] text-pink underline"
            >
              смотреть весь каталог
            </Link>
            <PinkArrowSvg />
          </div>
        </div>
      </div>

      <HomeOrderBlock screenWidth={screenWidth} />

      <OccasionBlock screenWidth={screenWidth} />

      <QuestionBlock screenWidth={screenWidth} />

      <CardFooterBlock screenWidth={screenWidth} />
    </div>
  );
};

export default Home;
