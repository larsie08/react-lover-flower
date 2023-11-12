import { FC } from "react";
import { Link } from "react-router-dom";

const flowers = [
  "Сборные букеты",
  "Монобукеты",
  "Композиции из цветов",
  "розы",
  "свадебные",
];

export const FlowersBlock: FC = () => {
  return (
    <div className="catalog__content_block h-[280px]">
      <h2 className="absolute left-0 text-[200px] font-bold tracking-[8px] uppercase text-[#0A1717]">
        Цветы
      </h2>

      <ul className="w-[540px] relative z-20 h-full bg-[#000]/[0.20] backdrop-blur-[10px] px-10 py-5 rounded-[20px]">
        <li className="block_title text-[30px] mb-2.5 font-bold tracking-[1.2px] text-light-turquoise uppercase">
          Цветы
        </li>
        {flowers.map((item, i: number) => (
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
