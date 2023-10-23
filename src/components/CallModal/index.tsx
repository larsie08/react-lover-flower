import { FC } from "react";
import { createPortal } from "react-dom";

import classNames from "classnames";

import { CloseSvg, ModalCherrySvg, ModalLightSvg } from "../../assets";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setIsOpenModal } from "../../redux/modal/slice";

export const CallModal: FC = () => {
  const isOpen = useSelector((state: RootState) => state.modal.isOpenModal);
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(setIsOpenModal(false));
  };

  return createPortal(
    <div
      className={classNames(
        "call_modal fixed z-40 bottom-4 right-4 w-0 h-[485px] bg-[#0F2222] opacity-0 transition-all duration-200",
        { ["w-[540px] opacity-100"]: isOpen }
      )}
    >
      <ModalCherrySvg />
      <ModalLightSvg />
      <div className="call_modal__wrapper z-20 p-5 relative flex flex-col">
        <div className="call_modal__close flex justify-end">
          <button onClick={onClose}>
            <CloseSvg />
          </button>
        </div>
        <div className="call_modal__title flex z-20">
          <h1 className="title text-[40px] font-normal tracking-[.8px] uppercase font-cormorant">
            заказать звонок
          </h1>
        </div>
        <div className="border-t-[1px] w-[100px] mt-5" />
        <div className="call_modal__content mt-3">
          <p className="max-w-[310px] text-[14px] font-normal tracking-[.56px] uppercase">
            Впишите свои данные, и мы свяжемся с Вами. Ваши данные ни при каких
            обстоятельствах не будут переданы третьим лицам.
          </p>
        </div>
        <form className="call_modal__form flex flex-col gap-3 mt-3">
          <input
            className="w-full h-[60px] border border-light-turquoise bg-[#0F2222] p-4 placeholder:bg-[#0F2222] placeholder:text-[#395959] text-[14px] font-normal tracking-[.56px] uppercase"
            type="text"
            placeholder="Ваше имя"
          />
          <input
            className="w-full h-[60px] border border-light-turquoise bg-[#0F2222] p-4 placeholder:text-[#395959] text-[14px] font-normal tracking-[.56px] uppercase"
            type="tel"
            placeholder="+7 (977) 777-77-77"
          />
          <button className="w-[255px] mt-2 text-[black] text-[12px] font-bold tracking-[1.2px] uppercase bg-light-turquoise p-4 hover:bg-cherry hover:text-[white] focus:border focus:border-cherry focus active:bg-cherry active:text-[white] active:shadow-[0_0_10px_0_#1B000E_inset]">
            отправить
          </button>
        </form>
        <div className="mt-3">
          <p className="max-w-[342px] text-[10px] font-normal tracking-[0.2px] font-roboto_condensed">
            Нажимая на кнопку «Отправить», я даю свое согласие на обработку
            персональных данных, в соответствии с
            <span className="text-pink underline ml-1">
              Политикой конфиденциальности
            </span>
          </p>
        </div>
      </div>
    </div>,
    document.getElementById("portal") as Element
  );
};
