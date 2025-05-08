import { FC, use, useEffect, useState } from "react";
import axios from "axios";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { useOutletContext } from "react-router-dom";

import { ReviewBlock } from "./ReviewBlock";

import { useAppDispatch } from "../../../../redux/store";
import { updateBouquet } from "../../../../redux/bouquets/slice";
import { Bouquet } from "../../../../redux/bouquets/types";
import { Reviews } from "../../../../redux/reviews/types";

import { AlertColor, Rating } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { grey } from "@mui/material/colors";
import {
  setModalState,
  setSeverityOption,
} from "../../../../redux/modal/slice";
import { ModalType } from "../../../../redux/modal/types";

interface ReviewForm {
  feedback: string;
  name: string;
  email: string;
}

const BouquetReviewsBlock: FC = () => {
  const dispatch = useAppDispatch();

  const bouquet = useOutletContext<Bouquet>();

  const [rating, setRating] = useState<number>(0);
  const [reviews, setReviews] = useState<Reviews[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReviewForm>();

  const submitReview: SubmitHandler<ReviewForm> = (data) => {
    sendReview(rating, data.feedback, data.name, data.email);
    sendAlert("success");
  };

  const errorReview: SubmitErrorHandler<ReviewForm> = (data) => {
    console.log(data);
    sendAlert("error");
  };

  const sendAlert = (severityOption: AlertColor) => {
    dispatch(setModalState({ modalType: ModalType.Alert, isOpen: true }));
    dispatch(setSeverityOption({ severity: severityOption }));
  };

  const editDate = (date: string | Date) => {
    let editedDate = "";

    if (date instanceof Date) {
      editedDate = date.toLocaleDateString().split(".").reverse().join("-");
    } else {
      editedDate = date.split("T")[0].split("-").reverse().join("-");
    }

    return editedDate;
  };

  const sendReview = async (
    rating: number,
    feedback: string,
    name: string,
    email: string
  ) => {
    try {
      const review = { bouquetId: bouquet.id, rating, feedback, name, email };

      const date = new Date();
      const createdAt = editDate(date);

      const reviewId = reviews.length + 1;

      setReviews([
        ...reviews,
        { reviewId, rating, feedback, name, email, createdAt },
      ]);

      dispatch(
        updateBouquet({
          id: bouquet.id,
          review: { reviewId, rating, feedback, name, email, createdAt },
        })
      );

      // await axios.post("http://localhost:3000/api/review", review);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!bouquet.reviews) return;

    setReviews(bouquet.reviews);
  }, [bouquet]);

  return (
    <div className="mt-16">
      <div className="reviews">
        {reviews ? (
          reviews.map((obj) => (
            <ReviewBlock
              key={obj.reviewId}
              rating={obj.rating}
              feedback={obj.feedback}
              name={obj.name}
              createdAt={editDate(obj.createdAt)}
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
          <label htmlFor="rating-review">Ваша оценка:</label>

          <Rating
            name="rating-review"
            defaultValue={0}
            value={rating}
            max={5}
            precision={1}
            onChange={(_event, value) => {
              setRating(value ? value : 0);
            }}
            emptyIcon={
              <StarBorderIcon
                style={{ color: grey[800], opacity: "inherit" }}
              />
            }
          />
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
            {...register("feedback", { required: true })}
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
