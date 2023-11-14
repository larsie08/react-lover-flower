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
    <div className="w-[825px] pb-5 px-5 flex flex-col border border-light-turquoise">
      <div className="title h-[70px] flex items-center justify-between">
        <h1 className="text-center text-[20px] text-light-turquoise font-normal uppercase">
          {title}
        </h1>
        <h2
          onClick={onClick}
          className="flex h-[70px] w-[15px] text-[40px] text-light-turquoise font-extralight cursor-pointer"
        >
          {isOpen ? "-" : "+"}
        </h2>
      </div>

      <p
        className={classNames("h-full text-[20px] font-light transition-all", {
          ["hidden"]: !isOpen,
        })}
      >
        {content}
      </p>
    </div>
  );
};
