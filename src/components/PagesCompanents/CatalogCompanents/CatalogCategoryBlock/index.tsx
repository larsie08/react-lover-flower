import { FC } from "react";
import { CatalogCloseSvg } from "../../../../assets";
import classNames from "classnames";
import { setCategory } from "../../../../redux/filter/slice";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../../redux/store";

export const CatalogCategoryBlock: FC = () => {
  const dispatch = useAppDispatch();
  const category = useSelector((state: RootState) => state.filter.category);
  const categoryId = useSelector((state: RootState) => state.filter.id);

  const onClear = () => {
    const obj = { id: NaN, category: "" };
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
