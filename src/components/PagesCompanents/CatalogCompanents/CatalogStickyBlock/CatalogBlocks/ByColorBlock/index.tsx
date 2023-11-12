import { FC } from "react";

const colors = [
  "белый",
  "желтый",
  "зеленый",
  "красный",
  "оранжевый",
  "розовый",
  "синий",
];

export const ByColorBlock: FC = () => {
  return (
    <div className="colors_block flex flex-col gap-2">
      <h2 className="text-[14px] text-light-turquoise font-bold tracking-[0.56px] uppercase">
        По цвету
      </h2>
      <ul className="flex flex-col gap-1">
        {colors.map((item, id) => (
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
