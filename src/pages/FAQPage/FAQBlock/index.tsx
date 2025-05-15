import { FC, memo } from "react";
import Collapse from "@mui/material/Collapse";

interface FAQBlockProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

export const FAQBlock: FC<FAQBlockProps> = memo(
  ({ title, content, isOpen, onClick }) => {
    return (
      <div
        className={
          "flex max-w-[825px] flex-col border border-light-turquoise px-5 pb-5 max-lg:gap-2 max-lg:pt-5"
        }
      >
        <div
          onClick={onClick}
          className="trigger relative z-20 flex max-h-[80px] items-center justify-between"
        >
          <h1 className="title select-none font-normal uppercase text-light-turquoise max-lg:text-[14px] lg:text-center lg:text-[20px]">
            {title}
          </h1>
          <h2 className="flex w-[15px] cursor-pointer select-none text-[40px] font-extralight text-light-turquoise">
            {isOpen ? "-" : "+"}
          </h2>
        </div>

        <Collapse orientation="vertical" in={isOpen}>
          <p className="font-light max-lg:text-[14px] lg:text-[20px]">
            {content}
          </p>
        </Collapse>
      </div>
    );
  },
);
