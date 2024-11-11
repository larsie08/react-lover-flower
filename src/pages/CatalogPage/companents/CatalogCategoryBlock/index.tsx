import { FC, memo } from "react";
import classNames from "classnames";

import { CatalogCloseSvg } from "../../../../assets";

type CategoryBlockProps = {
  categoryId: string;
  onClear: () => void;
};

export const CatalogCategoryBlock: FC<CategoryBlockProps> = memo(
  ({ categoryId, onClear }) => {
    return (
      <div className="flex items-end ml-[30rem] ">
        <div className="flex gap-2 h-6">
          <h3 className="text-[14px] text-light-turquoise font-bold tracking-[0.56px] uppercase">
            {categoryId}
          </h3>
          <button
            className={classNames({ invisible: categoryId === "" })}
            onClick={onClear}
          >
            <CatalogCloseSvg />
          </button>
        </div>
      </div>
    );
  }
);
