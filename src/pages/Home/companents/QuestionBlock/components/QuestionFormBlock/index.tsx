import { FC } from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";

interface QuestionForm {
  name: string;
  tel: number;
  comment: string;
}

export const QuestionFormBlock: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QuestionForm>();

  const submit: SubmitHandler<QuestionForm> = (data) => console.log(data);
  const error: SubmitErrorHandler<QuestionForm> = (data) => console.log(data);

  return (
    <div className="question_block__form relative flex flex-col md:items-end mt-8 max-lg:items-center md:mr-[1rem]">
      <form
        onSubmit={handleSubmit(submit, error)}
        className="sm:w-[455px] flex flex-col gap-3 max-lg:max-w-[400px]"
      >
        <input
          className="form__input w-full h-[60px] border border-light-turquoise bg-[#0F2222] p-4 placeholder:text-[#395959] text-[14px] font-normal tracking-[.56px] uppercase outline-none aria-[invalid=true]:placeholder:text-[#FF3A44] aria-[invalid=true]:border-[#FF3A44]"
          type="text"
          placeholder="Ваше имя"
          {...register("name", { required: true })}
          aria-invalid={errors.name ? true : false}
        />
        <input
          className="form__input w-full h-[60px] border border-light-turquoise bg-[#0F2222] p-4 placeholder:text-[#395959] text-[14px] font-normal tracking-[.56px] uppercase outline-none aria-[invalid=true]:placeholder:text-[#FF3A44] aria-[invalid=true]:border-[#FF3A44]"
          type="tel"
          placeholder="+7 (977) 777-77-77"
          {...register("tel", { required: true })}
          aria-invalid={errors.tel ? true : false}
        />
        <input
          className="form__input w-full h-[120px] border border-light-turquoise bg-[#0F2222] placeholder:-translate-y-8 p-4 placeholder:text-[#395959] text-[14px] font-normal tracking-[.56px] uppercase outline-none aria-[invalid=true]:placeholder:text-[#FF3A44] aria-[invalid=true]:border-[#FF3A44]"
          type="text"
          placeholder="Ваш комментарий"
          {...register("comment")}
          aria-invalid={errors.comment ? true : false}
        />
        <button className="w-[255px] mt-2 transition-all text-[black] text-[12px] border border-light-turquoise font-bold tracking-[1.2px] uppercase bg-light-turquoise p-4 hover:border-cherry hover:bg-cherry hover:text-[white] focus:border focus:border-cherry active:bg-cherry active:text-[white] active:shadow-[0_0_10px_0_#1B000E_inset]">
          отправить
        </button>
        <p className="max-w-[342px] text-[10px] font-normal tracking-[0.2px] font-roboto_condensed">
          Нажимая на кнопку «Отправить», я даю свое согласие на обработку
          персональных данных, в соответствии с
          <span className="text-pink underline ml-1">
            Политикой конфиденциальности
          </span>
        </p>
      </form>
    </div>
  );
};
