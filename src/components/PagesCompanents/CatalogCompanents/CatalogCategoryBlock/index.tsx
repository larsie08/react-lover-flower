import { FC } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";

import { setCategory } from "../../../../redux/filter/slice";
import { useAppDispatch } from "../../../../redux/store";
import { selectCategory } from "../../../../redux/filter/selectors";

import { CatalogCloseSvg } from "../../../../assets";

export const CatalogCategoryBlock: FC = () => {
  const dispatch = useAppDispatch();
  const { category, categoryId } = useSelector(selectCategory);

  const onClear = () => {
    const obj = { categoryId: null, category: "" };
    dispatch(setCategory(obj));
  };

  return (
    <div className="flex items-end ml-[30rem] ">
      <div className="flex gap-2 h-6">
        <h3 className="text-[14px] text-light-turquoise font-bold tracking-[0.56px] uppercase">
          {category}
        </h3>
        <button
          className={classNames({ invisible: categoryId === null })}
          onClick={onClear}
        >
          <CatalogCloseSvg />
        </button>
      </div>
    </div>
  );
};
