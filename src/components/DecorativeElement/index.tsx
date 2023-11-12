import { FC } from "react";

interface DecorativeElementProps {
  className: string;
}

export const DecorativeElement: FC<DecorativeElementProps> = ({ className }) => {
  return <div className={className} />;
};
