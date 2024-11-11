import { FC, memo } from "react";

import {
  setDeleteBouquet,
  updateItemCount,
} from "../../../../../redux/cart/slice";
import { AppDispatch } from "../../../../../redux/store";

type CartCardProps = {
  id: number;
  name: string;
  cost: number;
  imageUrl: string;
  count: number;
  dispatch: AppDispatch;
};

type CounterButtonProps = {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
};

const CounterButton: FC<CounterButtonProps> = memo(
  ({ onClick, disabled = false, children }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      className="h-full w-[8px] disabled:text-[#555] text-[white] hover:text-light-turquoise active:text-cherry transition-colors"
    >
      {children}
    </button>
  )
);

export const CartCardBlock: FC<CartCardProps> = memo(
  ({ id, name, cost, imageUrl, count, dispatch }) => {
    const handleAddToCart = (id: number) =>
      dispatch(updateItemCount({ id, delta: 1 }));

    const handleMinus = (id: number) =>
      dispatch(updateItemCount({ id, delta: -1 }));

    const handleDeleteItem = (id: number) => dispatch(setDeleteBouquet(id));

    return (
      <div className="card_block flex border-b-[1px] border-[#555] py-5">
        {/* Image Block */}
        <div className="img">
          <img className="h-[80px] w-[60px]" src={imageUrl} alt={name} />
        </div>

        {/* Info Block */}
        <div className="flex flex-col justify-between ml-5">
          <h2 className="text-[14px] font-normal tracking-[0.28px] uppercase">
            {name}
          </h2>

          {/* Counter Block */}
          <div className="flex justify-around items-center w-[100px] h-[30px] border-[0.5px] border-[#555]">
            <CounterButton
              onClick={() => handleMinus(id)}
              disabled={count === 1}
            >
              –
            </CounterButton>
            <b>{count}</b>
            <CounterButton onClick={() => handleAddToCart(id)}>+</CounterButton>
          </div>
        </div>

        {/* Price & Delete Block */}
        <div className="flex flex-col justify-between ml-auto">
          <p className="text-[14px] text-light-turquoise font-bold tracking-[0.56px] uppercase">
            {cost} ₽
          </p>
          <button
            onClick={() => handleDeleteItem(id)}
            className="text-[10px] font-normal tracking-[0.4px] underline uppercase"
          >
            Удалить
          </button>
        </div>
      </div>
    );
  }
);
