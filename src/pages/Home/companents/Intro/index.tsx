import { FC, memo } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import { CartItem } from "../../../../redux/cart/types";

import { IntroTitleBlock } from "./IntroTitleBlock";
import { CartSvg, PhoneButtonSvg } from "../../../../assets";
import { DecorativeElement } from "../../../../components";

type IntroProps = {
  cart: CartItem[];
  screenWidth: number;
  openModal: () => void;
  openCart: () => void;
};

export const Intro: FC<IntroProps> = memo(
  ({ cart, openModal, openCart, screenWidth }) => {
    const cartCount = cart.length;
    const isMobile = screenWidth < 640;

    return (
      <div className="intro relative max-sm:pt-5 sm:pt-[140px] sm:h-[1600px] max-sm:h-[1000px]">
        {/* Background Images */}
        <div className="absolute w-full sm:h-[1600px] max-sm:h-[800px] top-0">
          <img
            className="intro_img absolute w-full h-full top-0 left-0 z-10"
            srcSet="./img/PagesImg/HomeImg/IntroImg/intro.png 1280w, ./img/PagesImg/HomeImg/IntroImg/introAdaptive.png 640w"
            alt="intro"
          />
          <img
            srcSet="./img/PagesImg/HomeImg/IntroImg/shadow.png 1280w, ./img/PagesImg/HomeImg/IntroImg/shadow-640.png 640w"
            className="absolute h-[300px] w-full z-20 bottom-0"
          />
        </div>

        {/* Decorative Elements */}
        <DecorativeElement
          className="w-[359px] h-[294px] rotate-[41.599deg] rounded-[50%] bg-light-turquoise blur-[125px] absolute top-[34rem] left-[16rem] 
          max-sm:w-[148px] max-sm:h-[121px] max-sm:blur-[60px] max-sm:left-0 max-sm:top-[300px]"
        />
        <DecorativeElement
          className="w-[473px] h-[212px] -rotate-[43.21deg] rounded-[50%] bg-cherry blur-[125px] absolute top-[25rem] sm:right-[25rem]
          max-sm:w-[131px] max-sm:h-[64px] max-sm:blur-[25px] max-sm:right-[2rem] max-sm:top-[17rem]"
        />

        {/* Content */}
        <div className="intro_wrapper relative container mx-auto">
          <IntroTitleBlock screenWidth={screenWidth} />

          <div className="intro__footer__content flex justify-end mt-10 relative z-20">
            {/* Main Call-to-Action */}
            <div className="flex-1 flex flex-col items-center max-sm:mt-[600px]">
              <h2 className="text-[20px] font-normal tracking-[0.4px] max-sm:text-center max-sm:w-[300px]">
                Создаём для тех, кто ценит свежесть и изящество цветка
              </h2>
              <Link
                to="catalog"
                className="bg-light-turquoise h-[50px] w-[220px] max-sm:w-[300px] text-center text-[black] mt-12 px-12 py-4 border border-light-turquoise uppercase text-standart font-bold tracking-[1.2px] hover:bg-cherry hover:border-cherry hover:text-white transition-all"
              >
                Смотреть каталог
              </Link>
            </div>

            {/* Footer Buttons */}
            {!isMobile && (
              <div className="intro__footer_buttons flex-col items-end justify-center sm:flex max-sm:hidden">
                <h3 className="phone text-[16px] mt-14 text-light-turquoise font-normal tracking-[1.6px] uppercase">
                  +375 (29) 113-69-69
                </h3>
                <button
                  onClick={openModal}
                  className="call w-[180px] mt-3 flex items-center gap-2 py-2 px-4 bg-black/20 rounded-xl backdrop-blur-[10px]"
                >
                  <PhoneButtonSvg />
                  <p className="text-[14px] font-normal tracking-[1.4px] uppercase text-light-turquoise">
                    Заказать звонок
                  </p>
                </button>
                <button
                  onClick={openCart}
                  className="cart relative flex mt-5 bg-black/20 rounded-xl backdrop-blur-[10px] p-[15px]"
                >
                  <CartSvg />
                  <svg
                    className="absolute right-[8px] top-[10px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                  >
                    <circle cx="8" cy="8.86523" r="8" fill="#43FFD2" />
                  </svg>
                  <p
                    className={classNames(
                      "text-dark-green absolute right-[13px] top-[10px] text-standart",
                      { ["right-0 left-10"]: cartCount >= 10 }
                    )}
                  >
                    {cartCount}
                  </p>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
);
