import { FC } from "react";

const format = [
  "букет",
  "в вазе",
  "в конверте",
  "в корзине",
  "в шляпной коробке",
  "в ящике",
];

export const ByFormatBlock: FC = () => {
  return (
    <div className="format_block flex flex-col gap-2">
      <h2 className="text-[14px] text-light-turquoise font-bold tracking-[0.56px] uppercase">
        по формату
      </h2>
      <ul className="flex flex-col gap-1">
        {format.map((item, id) => (
          <li key={id} className="flex gap-1">
            <input className="rounded-[2px] border-[0.5px]" type="checkbox" />
            <label className="text-[12px] font-light tracking-[0.48px] uppercase">
              {item}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
