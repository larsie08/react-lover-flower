import { FC } from "react";
import { Link } from "react-router-dom";

const additionally = ["шары", "игрушки", "открытки", "упаковка"];

export const AdditionallyBlock: FC = () => {
  return (
    <div className="catalog__content_block h-[250px] mt-8">
      <p className="absolute right-[2rem] text-[200px] max-w-[800px] overflow-hidden font-bold tracking-[8px] uppercase text-[#0A1717] max-[1536px]:max-w-[500px]">
        дополнительно
      </p>

      <ul className="w-[540px] relative z-20 h-full bg-[#000]/[0.20] backdrop-blur-[10px] px-10 py-5 rounded-[20px]">
        <li className="block_title text-[30px] mb-2.5 font-bold tracking-[1.2px] text-light-turquoise uppercase">
          дополнительно
        </li>
        {additionally.map((item, i: number) => (
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
