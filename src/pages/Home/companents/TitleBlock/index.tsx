import { FC, ReactNode } from "react";

type TitleBlock = {
  title: string;
  subtitle?: string;
  titleClassName: string;
  subtitleClassName?: string;
  subtitleWrapperClassName?: string;
  animation: "fade-right" | "fade-left";
  renderTitleText?: () => ReactNode;
};

export const HomeTitleBlock: FC<TitleBlock> = ({
  title,
  subtitle,
  titleClassName,
  subtitleClassName,
  subtitleWrapperClassName,
  animation,
  renderTitleText,
}) => (
  <div className="title_block flex flex-col max-lg:items-center relative z-30">
    <h1 data-aos={animation} data-aos-offset="300" className={titleClassName}>
      {title}
    </h1>
    {subtitle && (
      <div className={subtitleWrapperClassName}>
        <h2
          data-aos={animation}
          data-aos-offset="300"
          data-aos-duration="1800"
          data-aos-anchor-placement="top-bottom"
          className={subtitleClassName || ""}
        >
          {subtitle}
        </h2>
      </div>
    )}
    {renderTitleText?.()}
  </div>
);
