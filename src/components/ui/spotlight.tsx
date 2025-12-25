import React from "react";
import { cn } from "@/lib/utils";

type SpotlightProps = {
  className?: string;
  fill?: string;
};

export const Spotlight = ({ className, fill }: SpotlightProps) => {
  return (
    <svg
      className={cn(
        "animate-spotlight pointer-events-none absolute z-1  h-[169%] w-[138%] lg:w-[84%] opacity-0",
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <g filter="url(#filter0_f_29_215)">
        <path
          fill={fill || "white"}
          fillOpacity="0.21"
          d="M2086 2842C3017.37 2842 3787 2207.26 3787 1421C3787 634.735 3017.37 0 2086 0C1154.63 0 385 634.735 385 1421C385 2207.26 1154.63 2842 2086 2842Z"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_29_215"
          x="85"
          y="-300"
          width="3700"
          height="3542"
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
            stdDeviation="151"
            result="effect1_foregroundBlur_29_215"
          />
        </filter>
      </defs>
    </svg>
  );
};