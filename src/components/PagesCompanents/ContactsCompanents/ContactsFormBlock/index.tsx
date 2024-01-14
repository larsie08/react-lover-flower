import { FC } from "react";
import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form";

interface MyForm {
  name: string;
  tel: number;
  comment: string;
}

export const ContactsFormBlock: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MyForm>();

  const submit: SubmitHandler<MyForm> = (data) => console.log(data);
  const error: SubmitErrorHandler<MyForm> = (data) => console.log(data);

  return (
    <div className="contacts_form mt-36">
      <div className="contacts_form__wrapper container mx-auto">
        <div className="contacts_form__top flex justify-between items-center pt-8">
          <div className="contacts_form__title flex z-30 flex-col">
            <h1 className="title flex items-center h-[100px] text-[100px] font-cormorant font-normal tracking-[2px] uppercase">
              напишите
            </h1>
            <h1 className="title flex items-center justify-end h-[100px] text-[100px] font-cormorant font-normal tracking-[2px] uppercase">
              нам
            </h1>
          </div>

          <div className="max-w-[255px] flex flex-col gap-14">
            <div className="line border-t-[1px] border-light-turquoise"></div>
            <p>
              Отправьте ваш вопрос, заказ, предложение или жалобу через форму
              обратной связи, и наш специалист свяжется с вами в течение 15
              минут.
            </p>
          </div>
        </div>

        <div className="contacts__form relative flex justify-end mt-8">
          <img
            className="absolute left-[30rem] -rotate-[18.444deg]"
            src="./img/bgElements/ContactsBg/signature.png"
            alt="signature"
          />
          <form
            onSubmit={handleSubmit(submit, error)}
            className="w-[455px] flex flex-col gap-3"
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
