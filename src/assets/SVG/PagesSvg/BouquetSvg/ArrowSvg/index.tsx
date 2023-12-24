import { FC } from "react";

interface SvgProps {
  className: string;
}

export const ArrowSvg: FC<SvgProps> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M10.2713 12.1045L6.5 8.33316L10.2713 4.56183L10.7427 5.03316L7.44267 8.33316L10.7427 11.6332L10.2713 12.1045Z"
        fill="white"
      />
    </svg>
  );
};
