import { FC } from "react";

const format = [
  { id: "bouquet", name: "букет" },
  { id: "vase", name: "в вазе" },
  { id: "envelope", name: "в конверте" },
  { id: "basket", name: "в корзине" },
  { id: "hatbox", name: "в шляпной коробке" },
  { id: "box", name: "в ящике" },
];

export const ByFormatBlock: FC = () => {
  return (
    <div className="format_block flex flex-col gap-2">
      <h2 className="text-[14px] text-light-turquoise font-bold tracking-[0.56px] uppercase">
        по формату
      </h2>
      <ul className="flex flex-col gap-1">
        {format.map((obj) => (
          <li key={obj.id} className="flex gap-1">
            <input
              id={obj.id}
              className="rounded-[2px] border-[0.5px]"
              type="checkbox"
            />
            <label htmlFor={obj.id} className="text-[12px] font-light tracking-[0.48px] uppercase">
              {obj.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
