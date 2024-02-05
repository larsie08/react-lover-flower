import { FC } from "react";

export const ClearSvg: FC = () => {
  return (
    <svg
      className="ei-close"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_1_1160)">
        <path
          d="M13.4294 4.06152L13.9385 4.57056L4.57056 13.9378L4.06152 13.4291L13.4294 4.06152Z"
          fill="#7C7C7C"
        />
        <path
          d="M4.57056 4.06152L13.9385 13.4287L13.4294 13.9381L4.06152 4.57092L4.57056 4.06152Z"
          fill="#7C7C7C"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1_1160"
          x="-4"
          y="0"
          width="26"
          height="26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_1160"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_1160"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
