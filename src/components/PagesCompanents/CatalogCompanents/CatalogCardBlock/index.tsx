import { FC } from "react";

interface CatalogCardProps {
  id: number;
  name: string;
  cost: number;
  imageUrl: string;
  onClick: (id: number, name: string, imageUrl: string, cost: number) => void;
}

export const CatalogCardBlock: FC<CatalogCardProps> = ({
  id,
  name,
  cost,
  imageUrl,
  onClick,
}) => {
  const handleAddToCart = () => {
    onClick(id, name, imageUrl, cost);
  };
  return (
    <div className="card flex flex-col gap-3">
      <img className="h-[335px] w-full bg-cover" src={imageUrl} alt="bouquet" />
      <div className="flex flex-col gap-3">
        <h1 className="text-[20px] font-normal tracking-[0.8px] uppercase">
          {name}
        </h1>
        <p className="text-[14px] font-bold tracking-[0.56px] uppercase">
          {cost} ₽
        </p>
      </div>
      <button
        onClick={handleAddToCart}
        className="border-[.5px] w-[255px p-4 text-[12px] font-bold tracking-[1.2px] uppercase hover:bg-light-turquoise hover:text-[black] focus:border-light-turquoise active:shadow-[0_0_10px_0_#01281F_inset]"
      >
        В корзину
      </button>
    </div>
  );
};
