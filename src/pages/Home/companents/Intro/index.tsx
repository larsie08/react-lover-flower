import { FC, memo } from "react";
import { Link } from "react-router-dom";

import { CartItem } from "../../../../redux/cart/types";
import { ModalType } from "../../../../redux/modal/types";

import { CallButton, CartButton, IntroTitleBlock } from "./components";
import { DecorativeElement } from "../../../../components";

type IntroProps = {
  cart: CartItem[];
  screenWidth: number;
  openModal: (type: ModalType) => void;
};

export const Intro: FC<IntroProps> = memo(
  ({ cart, screenWidth, openModal }) => {
    const isMobile = screenWidth <= 768;

    return (
      <div className="intro relative max-sm:h-[1000px] max-sm:pt-5 sm:h-[1600px] sm:pt-[140px]">
        {/* Background */}
        <div className="absolute top-0 w-full max-sm:h-[800px] sm:h-[1600px]">
          <picture>
            <source
              srcSet="./img/PagesImg/HomeImg/IntroImg/introAdaptive.png 640w"
              media="(max-width: 767px)"
            />
            <img
              className="absolute left-0 top-0 z-10 h-full w-full"
              src="./img/PagesImg/HomeImg/IntroImg/intro.png"
              srcSet="./img/PagesImg/HomeImg/IntroImg/intro.png 1280w, ./img/PagesImg/HomeImg/IntroImg/introAdaptive.png 640w"
              loading="lazy"
              alt="flower"
            />
          </picture>

          <img
            srcSet="./img/PagesImg/HomeImg/IntroImg/shadow.png 1280w, ./img/PagesImg/HomeImg/IntroImg/shadow-640.png 640w"
            className="absolute bottom-0 z-20 h-[300px] w-full"
            alt="shadow"
          />
        </div>

        {/* Decorative Blurs */}
        <DecorativeElement className="absolute left-[16rem] top-[34rem] h-[294px] w-[359px] rotate-[41.599deg] rounded-[50%] bg-light-turquoise blur-[125px] max-sm:left-0 max-sm:top-[300px] max-sm:h-[121px] max-sm:w-[148px] max-sm:blur-[60px]" />
        <DecorativeElement className="absolute top-[25rem] h-[212px] w-[473px] -rotate-[43.21deg] rounded-[50%] bg-cherry blur-[125px] max-sm:right-[2rem] max-sm:top-[17rem] max-sm:h-[64px] max-sm:w-[131px] max-sm:blur-[25px] sm:right-[25rem]" />

        {/* Main Content */}
        <div className="intro_wrapper container relative mx-auto">
          <IntroTitleBlock screenWidth={screenWidth} />

          <div className="intro__footer__content relative z-20 mt-10 flex justify-end">
            <div className="flex flex-1 flex-col items-center max-sm:mt-[600px]">
              <h2 className="text-[20px] font-normal tracking-[0.4px] max-sm:w-[300px] max-sm:text-center">
                Создаём для тех, кто ценит свежесть и изящество цветка
              </h2>
              <Link
                to="catalog"
                className="hover:text-white mt-12 h-[50px] w-[220px] border border-light-turquoise bg-light-turquoise px-12 py-4 text-center text-standart font-bold uppercase tracking-[1.2px] text-[black] transition-all hover:border-cherry hover:bg-cherry max-sm:w-[300px]"
              >
                Смотреть каталог
              </Link>
            </div>

            {/* Кнопки и контакт */}
            {!isMobile && (
              <div className="intro__footer_buttons flex-col items-end justify-center max-sm:hidden sm:flex">
                <h3 className="phone mt-14 text-[16px] font-normal uppercase tracking-[1.6px] text-light-turquoise">
                  +375 (29) 113-69-69
                </h3>
                <CallButton onClick={() => openModal(ModalType.Modal)} />
                <CartButton
                  cartCount={cart.length}
                  onClick={() => openModal(ModalType.Cart)}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  },
);
