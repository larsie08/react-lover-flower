import { FC } from "react";

export const CartCardBlock: FC = () => {
  return (
    <div className="card_block flex justify-between border-b-[1px] border-[#555] py-5">
      <div className="img">
        <img src="./img/CartBouquets/bouquet1.png" alt="bouquet" />
      </div>
      <div className="flex flex-col justify-between">
        <h2 className="text-[14px] font-normal tracking-[0.28px] uppercase">
          рубиновые искры
        </h2>
        <div className="flex justify-around items-center w-full h-[30px] border-[0.5px] border-[#555]">
          <button className="h-full w-[8px] text-[#555]">–</button>
          <b>1</b>
          <button className="h-full w-[8px] text-[#555]">+</button>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <p className="text-[14px] text-light-turquoise font-bold tracking-[0.56px] uppercase">
          167.00 ₽
        </p>
        <button className="text-[10px] font-normal tracking-[0.4px] underline uppercase">
          Удалить
        </button>
      </div>
    </div>
  );
};
