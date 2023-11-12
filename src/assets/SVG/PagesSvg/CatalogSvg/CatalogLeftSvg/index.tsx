import { FC } from "react";

export const CatalogLeftSvg: FC = () => {
  return (
    <svg
      className="absolute -bottom-[20rem]"
      xmlns="http://www.w3.org/2000/svg"
      width="339"
      height="689"
      viewBox="0 0 339 689"
      fill="none"
    >
      <g filter="url(#filter0_f_1_308)">
        <ellipse
          cx="28.4407"
          cy="350.377"
          rx="49.7935"
          ry="105.527"
          transform="rotate(21.0974 28.4407 350.377)"
          fill="#43FFD2"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_1_308"
          x="-281.569"
          y="0.287598"
          width="620.021"
          height="700.179"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="125"
            result="effect1_foregroundBlur_1_308"
          />
        </filter>
      </defs>
    </svg>
  );
};
