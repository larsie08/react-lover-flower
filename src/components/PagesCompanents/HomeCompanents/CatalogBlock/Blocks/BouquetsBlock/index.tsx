import { FC } from "react";
import { Link } from "react-router-dom";

const bouquets = ["букеты", "для интерьера", "Композиции"];

export const BouquetsBlock: FC = () => {
  return (
    <div className="catalog__content_block h-[280px] mt-36">
        <h2 className="absolute text-[200px] top-8 right-0 font-bold tracking-[8px] uppercase text-[#0A1717]">
          букеты
        </h2>
      <ul className="w-[445px] relative z-20 h-full bg-[#000]/[0.20] backdrop-blur-[10px] rounded-[20px] px-10 py-5 ">
        <li className="block_title text-[30px] mb-2.5 max-w-[271px] font-bold tracking-[1.2px] text-light-turquoise uppercase">
          готовые букеты из сухоцветов
        </li>
        {bouquets.map((item, i: number) => (
          <li
            className="text-[18px] font-normal ml-5 tracking-[.72px] uppercase list-disc"
            key={i}
          >
            {item}
          </li>
        ))}
        <li className="mt-6 float-right">
          <Link to="catalog" className="text-standart font-bold text-pink tracking-[1.2px] underline uppercase">
            смотреть каталог
          </Link>
        </li>
      </ul>
    </div>
  );
};
