import { FC, memo } from "react";
import { createPortal } from "react-dom";
import classNames from "classnames";

import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../redux/store";
import { selectCallStatus } from "../../../redux/modal/selectors";
import { ModalType } from "../../../redux/modal/types";
import { setModalState } from "../../../redux/modal/slice";

import { CloseSvg, ModalCherrySvg, ModalLightSvg } from "../../../assets";
import { ModalForm } from "./ModalForm";

export const CallModal: FC = memo(() => {
  const dispatch = useAppDispatch();

  const isOpen = useSelector(selectCallStatus);

  const onClose = () => {
    dispatch(setModalState({ modalType: ModalType.Modal, isOpen: false }));
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
        <ModalForm />
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
});
