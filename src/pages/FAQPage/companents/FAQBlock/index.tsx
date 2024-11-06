import { FC } from "react";
import Collapse from "@mui/material/Collapse";

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
      className={
        "w-[825px] pb-5 px-5 flex flex-col border border-light-turquoise"
      }
    >
      <div
        onClick={onClick}
        className="trigger h-[80px] relative flex items-center justify-between z-20"
      >
        <h1 className="title text-center text-[20px] text-light-turquoise font-normal uppercase select-none">
          {title}
        </h1>
        <h2 className="flex w-[15px] text-[40px] text-light-turquoise font-extralight cursor-pointer select-none">
          {isOpen ? "-" : "+"}
        </h2>
      </div>

      <Collapse orientation="vertical" in={isOpen}>
        <p className={"text-[20px] font-light"}>{content}</p>
      </Collapse>
    </div>
  );
};
