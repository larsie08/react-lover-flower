import { FC, useState } from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";

import { useOutletContext } from "react-router-dom";

interface ReviewForm {
  review: string;
  name: string;
  email: string;
}

const BouquetReviewsBlock: FC = () => {
  const name = useOutletContext<string>();
  const [rating, setRating] = useState<number>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReviewForm>();

  const submitReview: SubmitHandler<ReviewForm> = (data) => {
    console.log(data);
  };

  const errorReview: SubmitErrorHandler<ReviewForm> = (data) => {
    console.log(data);
  };

  const submitRating = (value: number) => {
    setRating(value);
    console.log(value);
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
        <label className="" htmlFor="rating-group">
          Ваша оценка:
        </label>
        <div className="rating__group mt-1 relative p-0 w-[10em] h-[2em]">
          <input
            className="absolute border-none top-0 left-0 m-0 h-[2em] cursor-pointer"
            onChange={() => submitRating(1)}
            type="radio"
            name="rating"
            id="rating"
            value="1"
            aria-label="Ужасно"
          />
          <input
            className="absolute border-none top-0 left-0 m-0 h-[2em] cursor-pointer"
            onChange={() => submitRating(2)}
            type="radio"
            name="rating"
            id="rating"
            value="2"
            aria-label="Сносно"
          />
          <input
            className="absolute border-none top-0 left-0 m-0 h-[2em] cursor-pointer"
            onChange={() => submitRating(3)}
            type="radio"
            name="rating"
            id="rating"
            value="3"
            aria-label="Нормально"
          />
          <input
            className="absolute border-none top-0 left-0 m-0 h-[2em] cursor-pointer"
            onChange={() => submitRating(4)}
            type="radio"
            name="rating"
            id="rating"
            value="4"
            aria-label="Хорошо"
          />
          <input
            className="absolute border-none top-0 left-0 m-0 h-[2em] cursor-pointer"
            onChange={() => submitRating(5)}
            type="radio"
            name="rating"
            id="rating"
            value="5"
            aria-label="Отлично"
          />
        </div>
      </form>
      <form
        onSubmit={handleSubmit(submitReview, errorReview)}
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
