import type { FC } from 'react';
import { defaultTheme } from 'theme';

import type { IconProps } from '../types';

export const ArrowForward: FC<IconProps> = ({
  color = defaultTheme.colors.text,
  size = 24,
  style,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path
        d="M184 112L328 256L184 400"
        stroke={color}
        strokeWidth="48"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
