import { FC, memo } from "react";

type InfoBlockProps = { name: string; contentInfo: string };

export const FooterInfoBlock: FC<InfoBlockProps> = memo(
  ({ name, contentInfo }) => {
    return (
      <div className="flex flex-col gap-1.5">
        <h2 className="text-[14px] font-normal text-light-turquoise uppercase text-center">
          {name}
        </h2>
        <p className="text-[10px] font-light tracking-[1px] uppercase text-center">
          {contentInfo}
        </p>
      </div>
    );
  }
);
