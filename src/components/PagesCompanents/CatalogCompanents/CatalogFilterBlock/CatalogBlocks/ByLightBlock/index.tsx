import { FC } from "react";

const lighting = [
  { id: "gentle", name: "нежные" },
  { id: "light", name: "яркие" },
];

export const ByLightBlock: FC = () => {
  return (
    <div className="light_block flex flex-col gap-2">
      <h2 className="text-[14px] text-light-turquoise font-bold tracking-[0.56px] uppercase">
        По свету
      </h2>
      <ul className="flex flex-col gap-1">
        {lighting.map((obj) => (
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
