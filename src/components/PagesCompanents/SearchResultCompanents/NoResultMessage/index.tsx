import { FC } from "react";
import { Link } from "react-router-dom";

export const NoResultsMessage: FC = () => {
  return (
    <div className="flex flex-col gap-5 mt-8">
      <h1 className="max-w-[295px] text-[14px] font-normal tracking-[0.56px] uppercase">
        По данному запросу ничего не найдено. Попробуйте еще раз или перейдите в
        каталог
      </h1>
      <Link
        to="/catalog"
        className="bg-light-turquoise h-[50px] w-[220px] text-center text-[black] px-12 py-4 border border-light-turquoise uppercase text-standart font-bold tracking-[1.2px] hover:bg-cherry hover:border-cherry hover:text-[white] focus:border-cherry focus active:bg-cherry active:text-[white] active:shadow-[0_0_10px_0_#1B000E_inset]"
      >
        в каталог
      </Link>
    </div>
  );
};
