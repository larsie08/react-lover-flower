import { FC, ReactNode } from "react";
import { DecorativeElement } from "../DecorativeElement";

type TitlePageProps = {
  title: string;
  subtitle?: string;
  titleClassName: string;
  subtitleClassName?: string;
  wrapperClassName?: string;
  decorativeElementClassName?: string;
  renderTitleText?: () => ReactNode;
};

export const TitlePageBlock: FC<TitlePageProps> = ({
  title,
  subtitle,
  subtitleClassName,
  titleClassName,
  wrapperClassName = "page_title__block relative z-10",
  decorativeElementClassName,
  renderTitleText,
}) => {
  return (
    <div className={wrapperClassName}>
      {decorativeElementClassName && (
        <DecorativeElement className={decorativeElementClassName} />
      )}
      <h1 className={titleClassName}>{title}</h1>

      {subtitle && <h2 className={subtitleClassName}>{subtitle}</h2>}

      {renderTitleText?.()}
    </div>
  );
};
