import { FC } from "react";

export const CherryAdaptiveSvg: FC = () => {
  return (
    <svg
    className="absolute blur-[40px] right-[3rem]"
      width="320"
      height="402"
      viewBox="0 0 320 402"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_1_2039)">
        <path
          d="M233.797 222.048C214.34 252.207 169.732 322.877 128.025 295.97C86.3172 269.062 63.3032 154.767 82.7602 124.608C102.217 94.4489 151.801 91.8127 193.508 118.72C235.216 145.627 253.254 191.889 233.797 222.048Z"
          fill="#7D2253"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_1_2039"
          x="-24.2422"
          y="0.144531"
          width="365.872"
          height="401.818"
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
            stdDeviation="50"
            result="effect1_foregroundBlur_1_2039"
          />
        </filter>
      </defs>
    </svg>
  );
};
