import type { FC } from 'react';
import styled from 'styled-components';

import type { NeckDirection } from './types';

interface FretNumberProps {
  value: number;
  size: number;
  direction: NeckDirection;
}

interface FretNumberWrapperProps {
  direction: NeckDirection;
  size: number;
}

const FretNumberWrapper = styled.div<FretNumberWrapperProps>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 200ms;

  width: ${(props) =>
    props.direction === 'vertical' ? '32px' : `${props.size}px`};
  height: ${(props) =>
    props.direction === 'horizontal' ? '32px' : `${props.size}px`};

  top: ${(props) =>
    props.direction === 'vertical' ? '0px' : 'calc(100% + 15px)'};

  left: ${(props) => (props.direction === 'horizontal' ? '0px' : undefined)};

  right: ${(props) =>
    props.direction === 'vertical' ? 'calc(100% + 15px)' : undefined};

  @media (max-width: 1024px) {
    width: 30px;
  }
  @media (max-width: 768px) {
    font-size: 12px;
    width: 25px;
  }
  @media (max-width: 375px) {
    right: calc(100% + 5px);
    width: 20px;
  }
`;

export const FretNumber: FC<FretNumberProps> = ({ value, size, direction }) => {
  return (
    <FretNumberWrapper direction={direction} size={size}>
      <div>{value}</div>
    </FretNumberWrapper>
  );
};
