import { FC, memo } from "react";
import { SuggestionListProps } from "../../FormTypes/form.types";

export const SuggestionList: FC<SuggestionListProps> = memo(
  ({ suggestions, onSelect }) => (
    <ul className="suggestion-list">
      {suggestions.map((item) => (
        <li
          key={item.distance.value}
          onClick={() => onSelect(item)}
          className="suggestion-item"
        >
          <h4>{item.title.text}</h4>
          <span>{item.subtitle?.text}</span>
        </li>
      ))}
    </ul>
  )
);
