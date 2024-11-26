import { FC, memo } from "react";

type DecorativeElementProps = {
  className: string;
}

export const DecorativeElement: FC<DecorativeElementProps> = memo(
  ({ className }) => {
    return <div className={className} />;
  }
);
