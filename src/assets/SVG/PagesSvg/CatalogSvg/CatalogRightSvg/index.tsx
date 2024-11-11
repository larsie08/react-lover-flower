import { FC, memo } from "react";

export const CatalogRightSvg: FC = memo(() => {
  return (
    <svg
      className="absolute -bottom-[20rem] right-0"
      xmlns="http://www.w3.org/2000/svg"
      width="489"
      height="818"
      viewBox="0 0 489 818"
      fill="none"
    >
      <g filter="url(#filter0_f_1_291)">
        <path
          d="M562.127 491.246C523.706 550.8 435.621 690.35 353.262 637.217C270.903 584.083 225.458 358.388 263.879 298.833C302.301 239.279 400.212 234.073 482.571 287.206C564.93 340.339 600.549 431.691 562.127 491.246Z"
          fill="#7D2253"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_1_291"
          x="0.0512695"
          y="0.526367"
          width="827.544"
          height="898.525"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="125"
            result="effect1_foregroundBlur_1_291"
          />
        </filter>
      </defs>
    </svg>
  );
});
