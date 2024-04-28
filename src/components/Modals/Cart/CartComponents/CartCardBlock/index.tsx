import { FC } from "react";
import { useAppDispatch } from "../../../../../redux/store";
import { setDeleteBouquet, updateItemCount } from "../../../../../redux/cart/slice";

interface CartCardProps {
  id: number;
  name: string;
  cost: number;
  imageUrl: string;
  count: number;
}

export const CartCardBlock: FC<CartCardProps> = ({
  id,
  name,
  cost,
  imageUrl,
  count,
}) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = (id: number) =>
    dispatch(updateItemCount({ id, delta: 1 }));
  const handleMinus = (id: number) =>
    dispatch(updateItemCount({ id, delta: -1 }));

  const handleDeleteItem = (id: number) => dispatch(setDeleteBouquet(id));

  return (
    <div className="card_block flex border-b-[1px] border-[#555] py-5">
      <div className="img">
        <img className="h-[80px] w-[60px]" src={imageUrl} alt="bouquet" />
      </div>
      <div className="flex flex-col justify-between ml-5">
        <h2 className="text-[14px] font-normal tracking-[0.28px] uppercase">
          {name}
        </h2>
        <div className="flex justify-around items-center w-[100px] h-[30px] border-[0.5px] border-[#555]">
          <button
            disabled={count === 1}
            onClick={() => handleMinus(id)}
            className="h-full w-[8px] disabled:text-[#555] text-[white] hover:text-light-turquoise active:text-cherry transition-colors"
          >
            –
          </button>
          <b>{count}</b>
          <button
            onClick={() => handleAddToCart(id)}
            className="h-full w-[8px] text-[white] hover:text-light-turquoise active:text-cherry transition-colors"
          >
            +
          </button>
        </div>
      </div>
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
};
