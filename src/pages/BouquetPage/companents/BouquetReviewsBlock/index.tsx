import { FC, useEffect, useState } from "react";
import axios from "axios";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { useOutletContext } from "react-router-dom";
import { useSelector } from "react-redux";

import { RootState, useAppDispatch } from "../../../../redux/store";
import { addReview } from "../../../../redux/reviews/slice";
import { Reviews } from "../../../../redux/reviews/types";
import { selectBouquetById } from "../../../../redux/bouquets/selectors";
import { fetchReviews } from "../../../../redux/reviews/asyncActions";

import { ReviewBlock } from "./ReviewBlock";

interface ReviewForm {
  rating: number;
  review: string;
  name: string;
  email: string;
}

const BouquetReviewsBlock: FC = () => {
  const dispatch = useAppDispatch();
  const date = new Date();

  const bouquetId = useOutletContext<string>();
  const bouquet = useSelector((state: RootState) =>
    selectBouquetById(state, bouquetId)
  );

  const [reviews, setReviews] = useState<Reviews[] | undefined>();
  const currentDate = date.toLocaleDateString().split(".").join("/");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReviewForm>();

  const submitReview: SubmitHandler<ReviewForm> = (data) => {
    sendReview(data.rating, data.review, data.name, data.email);
  };

  const errorReview: SubmitErrorHandler<ReviewForm> = (data) => {
    console.log(data);
  };

  useEffect(() => {
    async function fetchBouquet() {
      try {
        const { payload } = (await dispatch(fetchReviews({ bouquetId }))) as {
          payload: Reviews[];
        };

        setReviews(payload);
      } catch (error) {
        console.log(error);
      }
    }
    fetchBouquet();
  }, [bouquetId, dispatch]);

  const sendReview = async (
    rating: number,
    feedback: string,
    name: string,
    email: string
  ) => {
    try {
      const review = { rating, feedback, name, email, currentDate };
      const reviewId = reviews?.reduce((foundId: number, item: Reviews) => {
        if (Number(item.reviewId) === foundId) {
          foundId++;
        }
        return foundId;
      }, 1);

      setReviews((prevReviews) => {
        return [
          ...(prevReviews || []),
          {
            reviewId: String(reviewId),
            bouquetId: String(bouquetId),
            review,
          },
        ];
      });

      dispatch(
        addReview({
          reviewId: String(reviewId),
          bouquetId: String(bouquetId),
          review,
        })
      );

      await axios.post(
        `https://655b76e2ab37729791a92825.mockapi.io/items/${bouquetId}/reviews`,
        { review }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-16">
      <div className="reviews">
        {reviews ? (
          reviews.map((obj) => (
            <ReviewBlock
              key={obj.reviewId}
              rating={obj.review.rating}
              feedback={obj.review.feedback}
              name={obj.review.name}
              currentDate={obj.review.currentDate}
            />
          ))
        ) : (
          <h3 className="text-[14px] font-normal tracking-[0.84px]">
            Отзывов пока нет
          </h3>
        )}
      </div>

      <div className="mt-16 flex flex-col gap-2">
        <h2 className="text-[14px] text-light-turquoise font-normal tracking-[0.84px] uppercase">
          {reviews
            ? `Оставьте свой отзыв на “${bouquet?.name}”`
            : `Будьте первым, кто оставил отзыв на “${bouquet?.name}”`}
        </h2>
        <h3 className="text-[14px] font-normal tracking-[0.84px]">
          Ваш адрес email не будет опубликован. Обязательные поля помечены *
        </h3>
      </div>
      <form
        onSubmit={handleSubmit(submitReview, errorReview)}
        className="flex flex-col gap-5 mt-5"
      >
        <div className="flex flex-col">
          <label htmlFor="rating-group">Ваша оценка:</label>
          <div className="rating__group mt-1 relative p-0 w-[10em] h-[2em]">
            <input
              className="absolute border-none top-0 left-0 m-0 h-[2em] cursor-pointer"
              type="radio"
              id="rating"
              value="1"
              aria-label="Ужасно"
              {...register("rating", { required: true })}
            />
            <input
              className="absolute border-none top-0 left-0 m-0 h-[2em] cursor-pointer"
              type="radio"
              id="rating"
              value="2"
              aria-label="Сносно"
              {...register("rating", { required: true })}
            />
            <input
              className="absolute border-none top-0 left-0 m-0 h-[2em] cursor-pointer"
              type="radio"
              id="rating"
              value="3"
              aria-label="Нормально"
              {...register("rating", { required: true })}
            />
            <input
              className="absolute border-none top-0 left-0 m-0 h-[2em] cursor-pointer"
              type="radio"
              id="rating"
              value="4"
              aria-label="Хорошо"
              {...register("rating", { required: true })}
            />
            <input
              className="absolute border-none top-0 left-0 m-0 h-[2em] cursor-pointer"
              type="radio"
              id="rating"
              value="5"
              aria-label="Отлично"
              {...register("rating", { required: true })}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label
            className="text-[14px] font-normal tracking-[0.84px]"
            htmlFor="review"
          >
            Ваш отзыв*
          </label>
          <textarea
            className="w-[540px] h-[180px] border border-[#555] bg-[#040A0A] p-4 placeholder:bg-[#040A0A] placeholder:text-[#395959] text-[14px] font-normal tracking-[.56px] uppercase outline-none aria-[invalid=true]:placeholder:text-[#FF3A44] aria-[invalid=true]:border-[#FF3A44]"
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
