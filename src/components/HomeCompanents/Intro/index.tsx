import { FC } from "react";

import { setIsOpenModal } from "../../../redux/modal/slice";
import { useAppDispatch } from "../../../redux/store";

import { CartSvg, PhoneButtonSvg, SocialBorderSvg } from "../../../assets";

import { Header } from "../..";

export const Intro: FC = () => {
  const dispatch = useAppDispatch()

  const onOpen = () => {
    dispatch(setIsOpenModal(true))
  }

  return (
    <div className="intro relative p-[140px] h-[1600px]">
      <img
        className="intro_img absolute h-[1600px] w-full top-0 left-0 z-10"
        src="./img/intro.png"
        alt="intro"
      />

      <div className="w-[359px] h-[294px] rotate-[41.599deg] rounded-[359px] bg-light-turquoise blur-[125px] absolute top-[34rem] left-[16rem] " />
      <div className="w-[473px] h-[212px] -rotate-[43.21deg] rounded-[473px] bg-cherry blur-[125px] absolute top-[25rem] right-[25rem]" />

      <div className="intro_wrapper relative container mx-auto">
        <div className="intro__title flex items-center containter mx-auto w-full">
          <div className="intro__content flex-1 flex flex-col">
            <h1 className="text-[200px] h-[160px] font-light tracking-[40px] uppercase font-cormorant flex justify-center items-center">
              lover
            </h1>
            <h1 className="text-[200px] h-[160px] font-light tracking-[40px] uppercase font-cormorant flex justify-center items-center relative z-20">
              Flower
            </h1>
          </div>
          <SocialBorderSvg />
        </div>
        <div className="intro__footer mt-10 relative z-20">
          <div className="intro__footer__content flex justify-end">
            <div className="flex-1 flex flex-col items-center">
              <h2 className="text-[20px] font-normal tracking-[0.4px]">
                Создаём для тех, кто ценит свежесть и изящество цветка
              </h2>
              <button className="bg-light-turquoise w-[220px] text-[black] mt-12 px-12 py-4 uppercase text-standart font-bold tracking-[1.2px] hover:bg-cherry hover:text-[white] focus:border focus:border-cherry focus active:bg-cherry active:text-[white] active:shadow-[0_0_10px_0_#1B000E_inset]">
                смотреть каталог
              </button>
            </div>
            <div className="intro__footer_buttons flex flex-col items-end justify-center">
              <h3 className="phone text-[16px] mt-14 text-light-turquoise font-normal tracking-[1.6px] uppercase">
                +375 (29) 113-69-69
              </h3>
              <button onClick={onOpen} className="call w-[180px] mt-3 flex items-center gap-2 py-2 px-4 bg-[#000]/[.20] rounded-xl backdrop-blur-[10px]">
                <PhoneButtonSvg />
                <p className="text-[14px] font-normal tracking-[1.4px] uppercase text-light-turquoise">
                  заказать звонок
                </p>
              </button>
              <button className="cart flex mt-5 bg-[#000]/[.20] rounded-xl backdrop-blur-[10px] p-[15px]">
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
                <p className="text-dark-green absolute right-[13px] top-[10px] text-standart">
                    5
                  </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
