import { FC } from "react";

import ratingStar from "../../../../../assets/SVG/PagesSvg/BouquetSvg/RatingSvg/ratingOn.svg";

interface ReviewProps {
  rating: number;
  feedback: string;
  name: string;
  currentDate: string;
}

export const ReviewBlock: FC<ReviewProps> = ({
  rating,
  feedback,
  name,
  currentDate,
}) => {
  const ratingStars = [...new Array(Number(rating))].map((_, index) => (
    <img
      className="star absolute h-[2em] top-0 left-0"
      key={index}
      src={ratingStar}
      alt="star"
    />
  ));

  return (
    <div className="flex flex-col gap-2">
      <p className="h-[25px] text-light-turquoise text-[30px] font-normal tracking-[0.6px] uppercase">
        “
      </p>
      <h2 className="max-w-[540px] text-[16px] font-normal tracking-[0.32px]">
        {feedback}
      </h2>
      <div className="rating__group mt-1 relative w-[10em] h-[2em]">
        {ratingStars}
      </div>
      <div className="flex gap-1">
        <h4 className="text-[14px] font-normal tracking-[0.14px] text-[#555]">
          {name},
        </h4>
        <h4 className="text-[14px] font-normal tracking-[0.28px] text-[#555]">
          {currentDate}
        </h4>
      </div>
    </div>
  );
};
