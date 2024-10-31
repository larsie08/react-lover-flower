import { FC, useState, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";

import { ArrowSvg } from "../../../../assets";
import { BouquetFilters } from "../../../../redux/bouquets/types";

interface BouquetBlockProps {
  id: number;
  name: string;
  cost: number;
  imageUrl: string;
  filters: BouquetFilters;
  addToCart: (
    id: number,
    name: string,
    imageUrl: string,
    cost: number,
    count: number,
    filters: BouquetFilters
  ) => void;
}

export const BouquetBlock: FC<BouquetBlockProps> = ({
  id,
  name,
  cost,
  imageUrl,
  filters,
  addToCart,
}) => {
  const navigate = useNavigate();
  const [count, setCount] = useState<number>(1);

  const goBack = () => {
    navigate("/catalog");
  };

  const handleAddToCart = () => {
    addToCart(id, name, imageUrl, cost, count, filters);
  };

  const handlePlus = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setCount(count + 1);
  };
  const handleMinus = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setCount(count - 1);
  };

  return (
    <div className="h-[450px] bouquet mt-16 flex gap-20">
      <div className="flex flex-col items-center justify-between gap-5">
        <ArrowSvg className="h-[20px] w-[20px] rotate-90" />
        {Array.from({ length: 2 }).map((_, index) => (
          <img
            key={index}
            className="w-[160px] h-[175px]"
            src={imageUrl}
            alt="bouquet"
          />
        ))}
        <ArrowSvg className="h-[20px] w-[20px] -rotate-90" />
      </div>
      <div className="flex gap-14">
        <img className="w-[350px]" src={imageUrl} alt="bouquet" />
        <div className="flex flex-col justify-between">
          <button
            onClick={goBack}
            className="flex gap-2 items-center text-[10px] font-normal tracking-[0.4px] uppercase"
          >
            <ArrowSvg className="w-[16px] h-[16px]" /> назад
          </button>
          <div className="title">
            <h1 className="text-[40px] font-cormorant font-normal tracking-[0.8px] uppercase">
              {name}
            </h1>
            <h2 className="text-[30px] text-light-turquoise font-bold tracking-[1.2px] uppercase">
              {cost} ₽
            </h2>
          </div>
          <div className="flex flex-col gap-5">
            <p className="max-w-[490px] text-[14px] font-normal tracking-[0.56px] uppercase">
              <span className="font-bold">Состав:</span> Гвоздика (Диантус),
              Леукодендрон, Леукоспермум (Нутан), Лотос, Роза
            </p>
            <p className="max-w-[490px] text-[14px] font-normal tracking-[0.56px] uppercase">
              Завораживающая глубина ваших чувств передана огненными красками
              этого букета
            </p>
            <div className="max-w-[428px] text-[12px] font-light tracking-[0.48px] uppercase">
              <p>
                <span className="font-bold">Категории:</span> 8 марта, Букет на
                14 февраля, Букет на праздник, Букеты цветов на День рождения,
                Композиции из цветов, Композиции из цветов в коробке
              </p>
              <p>
                <span className="font-bold">Метки:</span> Для начальника,
                Мужские букеты
              </p>
            </div>
          </div>
          <div className="flex gap-8">
            <button
              onClick={handleAddToCart}
              className="border-[.5px] w-[255px] p-4 text-[12px] font-bold tracking-[1.2px] uppercase hover:bg-light-turquoise hover:text-[black] focus:border-light-turquoise active:shadow-[0_0_10px_0_#01281F_inset] transition"
            >
              В корзину
            </button>
            <form className="flex justify-around items-center w-[160px] border-[0.5px] border-[#555]">
              <button
                onClick={handleMinus}
                className="h-full w-[8px] disabled:text-[#555] text-[white] hover:text-light-turquoise active:text-cherry transition-colors"
                disabled={count === 1}
              >
                –
              </button>
              <b>{count}</b>
              <button
                onClick={handlePlus}
                className="h-full w-[8px] text-[white] hover:text-light-turquoise active:text-cherry transition-colors"
              >
                +
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
