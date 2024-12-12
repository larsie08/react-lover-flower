import { FC, memo } from "react";
import { Link } from "react-router-dom";

type FlowersBlockProps = {
  flowers: string[];
};

export const FlowersBlock: FC<FlowersBlockProps> = memo(({ flowers }) => {
  return (
    <div className="catalog__content_block h-[280px]">
      <h2 className="absolute left-0 text-[200px] font-bold tracking-[8px] uppercase text-[#0A1717] max-sm:hidden">
        Цветы
      </h2>

      <ul className="w-[540px] relative z-20 h-full bg-[#000]/[0.20] backdrop-blur-[10px] px-10 py-5 rounded-[20px] max-sm:w-[300px] max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-between">
        <li className="block_title text-[30px] mb-2.5 font-bold tracking-[1.2px] text-light-turquoise uppercase max-sm:text-[20px] max-sm:tracking-[0.04em] max-sm:text-center">
          Цветы
        </li>
        {flowers.map((item) => (
          <li
            className="text-[18px] font-normal ml-5 tracking-[.72px] uppercase list-disc max-sm:text-[14px]"
            key={item}
          >
            {item}
          </li>
        ))}
        <li className="mt-6 float-right">
          <Link
            to="catalog"
            className="text-standart font-bold text-pink tracking-[1.2px] underline uppercase"
          >
            смотреть каталог
          </Link>
        </li>
      </ul>
    </div>
  );
});
