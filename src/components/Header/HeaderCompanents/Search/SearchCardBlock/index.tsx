import { FC } from "react";
import { Link } from "react-router-dom";

interface SearchCardProps {
  id: number;
  name: string;
  imageUrl: string;
  cost: number;
}

export const SearchCardBlock: FC<SearchCardProps> = ({
  id,
  name,
  imageUrl,
  cost,
}) => {
  return (
    <Link
      to={`/catalog/bouquet/${id}`}
      className="card group/card relative flex gap-3 z-20 h-[80px] border-t p-3 w-full hover:bg-light-turquoise transition-colors"
    >
      <img className="bg-cover h-full w-[50px]" src={imageUrl} alt="bouquet" />
      <div className="flex flex-col justify-between">
        <h1 className="text-[14px] font-normal tracking-[0.8px] uppercase group-hover/card:text-[black]">
          {name}
        </h1>
        <p className="text-[14px] font-normal tracking-[0.56px] uppercase group-hover/card:text-[black]">
          {cost} ₽
        </p>
      </div>
    </Link>
  );
};
