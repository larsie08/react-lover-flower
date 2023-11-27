import { FC } from "react";

interface CardBlockProps {
  id: number;
  imageUrl: string;
  name: string;
  cost: number;
  onClick: (id: number, name: string, cost: number, imageUrl: string) => void;
}

export const CardBlock: FC<CardBlockProps> = ({
  id,
  imageUrl,
  name,
  cost,
  onClick,
}) => {
  const handleAddToCart = () => {
    onClick(id, name, cost, imageUrl);
  };
  return (
    <div className="slider__card">
      <img
        className="cart__img bg-[lightgray]/[50%] w-[350px] h-[450px] relative z-20"
        src={imageUrl}
        alt="bouquet"
      />
      <h1 className="cart__title relative z-10 mt-2 text-[20px] font-normal tracking-[.8px] uppercase">
        {name}
      </h1>
      <h2 className="cart__price relative z-10 mt-2 text-[14px] font-bold tracking-[.56px]">
        {cost} ₽
      </h2>
      <button
        onClick={handleAddToCart}
        className="border-[.5px] w-[255px] mt-6 p-4 text-[12px] font-bold tracking-[1.2px] uppercase hover:bg-light-turquoise hover:text-[black] focus:border-light-turquoise active:shadow-[0_0_10px_0_#01281F_inset]"
      >
        В корзину
      </button>
    </div>
  );
};
