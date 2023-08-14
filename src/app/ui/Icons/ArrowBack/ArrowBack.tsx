import type { FC } from 'react';

import type { IconProps } from '../types';

export const ArrowBack: FC<IconProps> = ({ color, size = 24, style }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 513 513"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path
        d="M328.931 112.979L184.931 256.979L328.931 400.979"
        stroke={color}
        strokeWidth="48"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
