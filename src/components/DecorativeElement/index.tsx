import { FC, memo } from "react";

interface DecorativeElementProps {
  className: string;
}

export const DecorativeElement: FC<DecorativeElementProps> = memo(
  ({ className }) => {
    return <div className={className} />;
  }
);
