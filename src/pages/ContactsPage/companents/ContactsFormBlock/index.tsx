import { FC } from "react";
import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form";
import { useAppDispatch } from "../../../../redux/store";
import {
  setModalState,
  setSeverityOption,
} from "../../../../redux/modal/slice";
import { ModalType } from "../../../../redux/modal/types";

interface MyForm {
  name: string;
  tel: number;
  comment: string;
}

export const ContactsFormBlock: FC = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MyForm>();

  const sendAlert = () => {
    dispatch(setModalState({ modalType: ModalType.Alert, isOpen: true }));
    dispatch(setSeverityOption({ severity: "success" }));
  };

  const submit: SubmitHandler<MyForm> = (data) => {
    sendAlert();
    console.log(data);
  };
  const error: SubmitErrorHandler<MyForm> = (data) => console.log(data);

  return (
    <div className="contacts_form lg:mt-36 max-lg:mt-16">
      <div className="contacts_form__wrapper container mx-auto relative">
        <img
          className="absolute max-lg:w-[132px] max-lg:h-[100px] lg:left-[20rem] lg:bottom-0 max-lg:top-[5rem] max-lg:left-[10rem] -rotate-[18.444deg] z-10"
          src="./img/PagesImg/ContactsImg/signature.png"
          alt="signature"
        />

        <div className="contacts_form__top flex max-lg:flex-col lg:justify-between lg:items-center lg:pt-8 relative z-20">
          <div className="contacts_form__title flex z-30 flex-col">
            <h1 className="title flex items-center lg:h-[100px] lg:text-[100px] max-lg:text-[40px] font-cormorant font-normal tracking-[2px] uppercase">
              напишите
            </h1>
            <h1 className="title flex items-center lg:justify-end lg:h-[100px] lg:text-[100px] max-lg:text-[40px] font-cormorant font-normal tracking-[2px] uppercase">
              нам
            </h1>
          </div>

          <div className="max-w-[255px] flex flex-col lg:gap-14 max-lg:gap-5 max-lg:mt-[45px]">
            <div className="line max-lg:w-[100px] border-t-[1px] border-light-turquoise"></div>
            <p className="text-[14px] font-normal tracking-[0.04px] uppercase">
              Отправьте ваш вопрос, заказ, предложение или жалобу через форму
              обратной связи, и наш специалист свяжется с вами в течение 15
              минут.
            </p>
          </div>
        </div>

        <div className="contacts__form flex justify-end mt-8">
          <form
            onSubmit={handleSubmit(submit, error)}
            className="w-[455px] flex flex-col gap-3 relative z-20"
          >
            <input
              className="form__input h-[60px] border border-[#555] bg-[#040A0A] p-4 placeholder:text-[#555] text-[14px] font-normal tracking-[.56px] outline-none  aria-[invalid=true]:placeholder:text-[#FF3A44] aria-[invalid=true]:border-[#FF3A44]"
              type="text"
              placeholder="Ваше имя"
              {...register("name", { required: true })}
              aria-invalid={errors.name ? true : false}
            />
            <input
              className="form__input h-[60px] border border-[#555] bg-[#040A0A] p-4 placeholder:text-[#555] text-[14px] font-normal tracking-[.56px] outline-none  aria-[invalid=true]:placeholder:text-[#FF3A44] aria-[invalid=true]:border-[#FF3A44]"
              type="tel"
              placeholder="+7 (977) 777-77-77"
              {...register("tel", { required: true })}
              aria-invalid={errors.tel ? true : false}
            />
            <input
              className="form__input h-[60px] border border-[#555] bg-[#040A0A] p-4 placeholder:text-[#555] text-[14px] font-normal tracking-[.56px] outline-none  aria-[invalid=true]:placeholder:text-[#FF3A44] aria-[invalid=true]:border-[#FF3A44]"
              type="text"
              placeholder="Ваш комментарий"
              {...register("comment", { required: true })}
              aria-invalid={errors.comment ? true : false}
            />
            <button className="w-[255px] mt-2 text-[black] text-[12px] border border-light-turquoise font-bold tracking-[1.2px] uppercase bg-light-turquoise p-4 hover:border-cherry hover:bg-cherry hover:text-[white] focus:border focus:border-cherry focus active:bg-cherry active:text-[white] active:shadow-[0_0_10px_0_#1B000E_inset]">
              отправить
            </button>
            <p className="max-w-[342px] text-[10px] font-normal tracking-[0.2px] font-roboto_condensed">
              Нажимая на кнопку «Отправить», я даю свое согласие на обработку
              персональных данных, в соответствии с
              <span className="text-[#8B3131] underline ml-1">
                Политикой конфиденциальности
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
