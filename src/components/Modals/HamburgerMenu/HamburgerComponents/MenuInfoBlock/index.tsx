import { FC, memo } from "react";

type MenuInfoBlockProps = {
  title: string;
  content: string;
};

export const MenuInfoBlock: FC<MenuInfoBlockProps> = memo(({ title, content }) => {
  return (
    <div key={title} className="flex flex-col">
      <h1 className="text-[14px] tracking-[0.1em] font-normal uppercase text-light-turquoise">
        {title}
      </h1>
      <h2 className="text-[10px] tracking-[0.1em] font-light uppercase">
        {content}
      </h2>
    </div>
  );
});
