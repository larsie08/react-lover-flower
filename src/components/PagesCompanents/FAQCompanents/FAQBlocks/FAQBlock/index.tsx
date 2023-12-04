import { FC } from "react";

import classNames from "classnames";

interface FAQBlockProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

export const FAQBlock: FC<FAQBlockProps> = ({
  title,
  content,
  isOpen,
  onClick,
}) => {
  return (
    <div
      className={classNames(
        "w-[825px] pb-5 px-5 flex flex-col border border-light-turquoise"
      )}
    >
      <div className="title h-[80px] relative flex items-center justify-between z-20">
        <h1 className="text-center text-[20px] text-light-turquoise font-normal uppercase">
          {title}
        </h1>
        <h2
          onClick={onClick}
          className="flex w-[15px] text-[40px] text-light-turquoise font-extralight cursor-pointer"
        >
          {isOpen ? "-" : "+"}
        </h2>
      </div>

      <p
        className={classNames("text-[20px] font-light transition-all", {
          ["opacity-0 h-0"]: !isOpen,
        })}
      >
        {content}
      </p>
    </div>
  );
};
