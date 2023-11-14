import { FC } from "react";
import { useSelector } from "react-redux";

import { setCategory } from "../../../../redux/filter/slice";
import { RootState, useAppDispatch } from "../../../../redux/store";

import { CatalogCloseSvg } from "../../../../assets";

import classNames from "classnames";

export const CatalogCategoryBlock: FC = () => {
  const dispatch = useAppDispatch();
  const { category, categoryId } = useSelector(
    (state: RootState) => state.filter
  );

  const onClear = () => {
    const obj = { categoryId: NaN, category: "" };
    dispatch(setCategory(obj));
  };

  return (
    <div className="flex ml-[30rem] gap-2 h-6">
      <h3 className="text-[14px] text-light-turquoise font-bold tracking-[0.56px] uppercase">
        {category}
      </h3>
      <button
        className={classNames({ invisible: Number.isNaN(categoryId) })}
        onClick={onClear}
      >
        <CatalogCloseSvg />
      </button>
    </div>
  );
};
