import { FC } from "react";

export const ByLightBlock: FC = () => {
  return (
    <div className="light_block flex flex-col gap-2">
      <h2 className="text-[14px] text-light-turquoise font-bold tracking-[0.56px] uppercase">
        По свету
      </h2>
      <ul className="flex flex-col gap-1">
        <li className="flex gap-1">
          <input className="rounded-[2px] border-[0.5px]" type="checkbox" />
          <label className="text-[12px] font-light tracking-[0.48px] uppercase">
            нежные
          </label>
        </li>
        <li className="flex gap-1">
          <input type="checkbox" />
          <label className="text-[12px] font-light tracking-[0.48px] uppercase">
            яркие
          </label>
        </li>
      </ul>
    </div>
  );
};
