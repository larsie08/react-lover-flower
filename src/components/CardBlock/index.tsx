import { FC } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectCartItemById } from "../../redux/cart/selectors";
import { BouquetFilters } from "../../redux/bouquets/types";
import { useAppDispatch } from "../../redux/store";
import { setCartItem } from "../../redux/cart/slice";

interface CardProps {
  id: number;
  name: string;
  cost: number;
  imageUrl: string;
  filters: BouquetFilters;
  imgClassName: string;
}

export const CardBlock: FC<CardProps> = ({
  id,
  name,
  cost,
  imageUrl,
  filters,
  imgClassName,
}) => {
  const dispatch = useAppDispatch();

  const cartItem = useSelector(selectCartItemById(id));

  const handleAddToCart = () => {
    const bouquet = { id, name, imageUrl, cost, count: 1, filters };
    dispatch(setCartItem(bouquet));
  };

  return (
    <div className="card relative flex flex-col gap-3 z-20">
      <Link to={`/catalog/bouquet/${id}`}>
        <img
          className={`${imgClassName} bg-cover`}
          src={imageUrl}
          alt="bouquet"
        />
      </Link>
      <div className="flex flex-col gap-3">
        <h1 className="text-[20px] font-normal tracking-[0.8px] uppercase">
          {name}
        </h1>
        <p className="text-[14px] font-bold tracking-[0.56px] uppercase">
          {cost} ₽
        </p>
      </div>
      <button
        onClick={handleAddToCart}
        className="border-[.5px] w-[255px] p-4 text-[12px] font-bold tracking-[1.2px] uppercase hover:bg-light-turquoise hover:text-[black] focus:border-light-turquoise active:shadow-[0_0_10px_0_#01281F_inset] transition"
      >
        В корзину {cartItem?.count && `(${cartItem?.count})`}
      </button>
    </div>
  );
};
