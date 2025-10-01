import { FC, memo } from "react";
import { SuggestionListProps } from "../../FormTypes/form.types";
import classNames from "classnames";

export const SuggestionList: FC<SuggestionListProps> = memo(
  ({ suggestions, onSelect }) => (
    <ul
      className={classNames(
        "suggestions_list flex flex-col absolute w-full overflow-hidden top-[85px] z-10 h-[220px]",
        { ["overflow-y-scroll"]: suggestions.length > 4 }
      )}
    >
      {suggestions.map((item) => (
        <li
          key={item.distance.value}
          onClick={() => onSelect(item)}
          className="suggestion-item h-[50px] w-full bg-[black] border-y group/address-items hover:bg-light-turquoise active:bg-cherry transition-colors active:shadow-[0_0_10px_0_#1B000E_inset]"
        >
          <h4 className="text-[14px] font-normal tracking-[.56px] group-hover/address-items:text-[black] group-active/address-items:text-[white]">
            {item.title.text}
          </h4>
          <span className="text-[14px] font-normal tracking-[.56px] group-hover/address-items:text-[black] group-active/address-items:text-[white]">
            {item.subtitle?.text}
          </span>
        </li>
      ))}
    </ul>
  )
);
