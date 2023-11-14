import { FC } from "react";

const colors = [
  { id: "white", name: "белый" },
  { id: "yellow", name: "желтый" },
  { id: "green", name: "зеленый" },
  { id: "red", name: "красный" },
  { id: "orange", name: "оранжевый" },
  { id: "pink", name: "розовый" },
  { id: "blue", name: "синий" },
];

export const ByColorBlock: FC = () => {
  return (
    <div className="colors_block flex flex-col gap-2">
      <h2 className="text-[14px] text-light-turquoise font-bold tracking-[0.56px] uppercase">
        По цвету
      </h2>
      <ul className="flex flex-col gap-1">
        {colors.map((obj) => (
          <li key={obj.id} className="flex gap-1">
            <input
              id={obj.id}
              className="rounded-[2px] border-[0.5px]"
              type="checkbox"
            />
            <label
              htmlFor={obj.id}
              className="text-[12px] font-light tracking-[0.48px] uppercase"
            >
              {obj.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
