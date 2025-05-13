import { FC } from "react";

export const DeliveryBlockTitle: FC<{ title: string }> = ({ title }) => {
  return (
    <div className="card_block__title">
      <h2 className="title md:text-[20px] max-md:text-[14px] text-pink font-bold tracking-[.8px] uppercase">
        {title}
      </h2>
    </div>
  );
};
