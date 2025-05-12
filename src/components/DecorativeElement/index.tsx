import { FC, memo } from "react";

type DecorativeElementProps = {
  className: string;
  children?: React.ReactNode;
};

export const DecorativeElement: FC<DecorativeElementProps> = memo(
  ({ className, children }) => {
    return <div className={className}>{children}</div>;
  }
);
