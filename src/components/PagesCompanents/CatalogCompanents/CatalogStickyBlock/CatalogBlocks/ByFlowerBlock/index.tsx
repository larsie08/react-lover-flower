import { FC } from "react";

const flowers = [
  "Альстромерия (2)",
  "Антуриум (1)",
  "Аспарагус (1)",
  "Астильба (7)",
  "Астранция (1)",
];

export const ByFlowerBlock: FC = () => {
  return (
    <div className="light_block flex flex-col gap-2">
      <h2 className="text-[14px] text-light-turquoise font-bold tracking-[0.56px] uppercase">
        по цветку
      </h2>
      <ul className="flex flex-col gap-1">
        {flowers.map((item, id) => (
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
