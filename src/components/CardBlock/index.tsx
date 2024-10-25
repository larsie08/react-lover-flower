import { FC, memo, useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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

export const CardBlock: FC<CardProps> = memo(
  ({ id, name, cost, imageUrl, filters, imgClassName }) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const cartItem = useSelector(selectCartItemById(id));

    const handleAddToCart = useCallback(() => {
      const bouquet = { id, name, imageUrl, cost, count: 1, filters };
      dispatch(setCartItem(bouquet));
    }, [dispatch, id, name, imageUrl, cost, filters]);

    const clickOnImg = useCallback(() => {
      navigate(`/catalog/bouquet/${id}`);
    }, [navigate, id]);

    const buttonText = useMemo(() => {
      return `В корзину ${cartItem?.count ? `(${cartItem.count})` : ""}`;
    }, [cartItem]);

    return (
      <div className="card relative flex flex-col gap-3 z-20">
        <div onClick={clickOnImg} className="cursor-pointer">
          <img
            className={`${imgClassName} bg-cover pointer-events-none select-none`}
            src={imageUrl}
            alt="bouquet"
          />
        </div>
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
          {buttonText}
        </button>
      </div>
    );
  }
);
