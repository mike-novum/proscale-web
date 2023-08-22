import type { MouseEventHandler, PropsWithChildren } from 'react';
import type { IconType } from 'react-icons';

export type ButtonType = 'default' | 'primary' | 'outlined' | 'ghost';

export type IconPosition = 'left' | 'right';

export type ButtonSize = 'small' | 'default' | 'large';

export type ButtonShape = 'rect' | 'circle';

export type ButtonWrapperProps = {
  size: ButtonSize;
  shape?: ButtonShape;
};

export interface ButtonProps extends PropsWithChildren {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  Icon?: IconType;
  type?: ButtonType;
  iconPosition?: IconPosition;
  size?: ButtonSize;
  shape?: ButtonShape;
}
