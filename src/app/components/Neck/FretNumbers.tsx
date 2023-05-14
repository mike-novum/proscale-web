import type { CSSProperties, FC } from 'react';
import styled from 'styled-components';

import type { NeckDirection } from './types';

interface FretNumberProps {
  value: number;
  size: number;
  direction: NeckDirection;
}

const FretNumberWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FretNumber: FC<FretNumberProps> = ({ value, size, direction }) => {
  const vStyles: CSSProperties = {
    top: 0,
    right: 'calc(100% + 15px)',
    width: '45px',
    height: size,
  };

  const hStyles: CSSProperties = {
    left: 0,
    top: 'calc(100% + 15px)',
    height: '45px',
    width: size,
  };

  return (
    <FretNumberWrapper style={direction === 'vertical' ? vStyles : hStyles}>
      <div>{value}</div>
    </FretNumberWrapper>
  );
};
