import type { FC } from 'react';

import type { ButtonProps } from './types';
import { Wrappers } from './Wrappers';

export const Button: FC<ButtonProps> = ({
  children,
  type = 'default',
  size = 'default',
  onClick,
  Icon,
  iconPosition = 'left',
}) => {
  const Container = Wrappers[`${type}Wrapper`];

  return (
    <Container size={size} onClick={onClick}>
      {Icon && iconPosition === 'left' && <Icon size={18} />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon size={18} />}
    </Container>
  );
};
