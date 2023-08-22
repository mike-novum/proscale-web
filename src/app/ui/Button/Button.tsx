import type { FC } from 'react';

import type { ButtonProps } from './types';
import { Wrappers } from './Wrappers';

export const Button: FC<ButtonProps> = ({
  children,
  type = 'default',
  size = 'default',
  onClick,
}) => {
  const Container = Wrappers[`${type}Wrapper`];

  return (
    <Container size={size} onClick={onClick}>
      <span>{children}</span>
    </Container>
  );
};
