import { FC, useState } from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";

import { useOutletContext } from "react-router-dom";
import { RatingSvg } from "../../../../assets";

interface ModalForm {
  review: string;
  name: string;
  email: string;
}

const BouquetReviewsBlock: FC = () => {
  const name = useOutletContext<string>();
  const [rating, setRating] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ModalForm>();

  const submit: SubmitHandler<ModalForm> = (data) => {
    console.log(data);
  };

  const error: SubmitErrorHandler<ModalForm> = (data) => {
    console.log(data);
  };

  return (
    <div className="mt-16">
      <div className="reviews">
        <h3 className="text-[14px] font-normal tracking-[0.84px]">
          Отзывов пока нет
        </h3>
      </div>
      <div className="mt-16 flex flex-col gap-2">
        <h2 className="text-[14px] text-light-turquoise font-normal tracking-[0.84px] uppercase">
          Будьте первым, кто оставил отзыв на “{name}”
        </h2>
        <h3 className="text-[14px] font-normal tracking-[0.84px]">
          Ваш адрес email не будет опубликован. Обязательные поля помечены *
        </h3>
      </div>
      <form className="flex flex-col mt-5">
        <label className="" htmlFor="">
          Ваша оценка:
        </label>
        <div className="mt-1">
          <button>
            <RatingSvg />
          </button>
          <button>
            <RatingSvg />
          </button>
          <button>
            <RatingSvg />
          </button>
          <button>
            <RatingSvg />
          </button>
          <button>
            <RatingSvg />
          </button>
        </div>
      </form>
      <form
        onSubmit={handleSubmit(submit, error)}
        className="flex flex-col gap-5 mt-5"
      >
        <div className="flex flex-col">
          <label
            className="text-[14px] font-normal tracking-[0.84px]"
            htmlFor="review"
          >
            Ваш отзыв*
          </label>
          <input
            className="w-[540px] h-[180px] border border-[#555] bg-[#040A0A] p-4 placeholder:bg-[#040A0A] placeholder:text-[#395959] text-[14px] font-normal tracking-[.56px] uppercase outline-none aria-[invalid=true]:placeholder:text-[#FF3A44] aria-[invalid=true]:border-[#FF3A44]"
            type="text"
            id="review"
            placeholder="Введите комментарий"
            {...register("review", { required: true })}
            aria-invalid={errors.name ? true : false}
          />
        </div>
        <div className="flex flex-col">
          <label
            className="text-[14px] font-normal tracking-[0.84px]"
            htmlFor="name"
          >
            Имя*
          </label>
          <input
            className="w-[540px] h-[60px] border border-[#555] bg-[#040A0A] p-4 placeholder:bg-[#040A0A] placeholder:text-[#395959] text-[14px] font-normal tracking-[.56px] uppercase outline-none aria-[invalid=true]:placeholder:text-[#FF3A44] aria-[invalid=true]:border-[#FF3A44]"
            type="text"
            id="name"
            placeholder="Введите ваше имя"
            {...register("name", { required: true })}
            aria-invalid={errors.name ? true : false}
          />
        </div>
        <div className="flex flex-col">
          <label
            className="text-[14px] font-normal tracking-[0.84px]"
            htmlFor="email"
          >
            E-mail*
          </label>
          <input
            className="w-[540px] h-[60px] border border-[#555] bg-[#040A0A] p-4 placeholder:bg-[#040A0A] placeholder:text-[#395959] text-[14px] font-normal tracking-[.56px] uppercase outline-none aria-[invalid=true]:placeholder:text-[#FF3A44] aria-[invalid=true]:border-[#FF3A44]"
            type="email"
            id="email"
            placeholder="Введите вашу почту"
            {...register("email", { required: true })}
            aria-invalid={errors.name ? true : false}
          />
        </div>
        <button className="w-[255px] mt-2 text-[black] text-[12px] border border-light-turquoise font-bold tracking-[1.2px] uppercase bg-light-turquoise p-4 hover:border-cherry hover:bg-cherry hover:text-[white] focus:border-cherry active:bg-cherry active:text-[white] active:shadow-[0_0_10px_0_#1B000E_inset]">
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

export default BouquetReviewsBlock;
