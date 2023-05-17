import type { FC } from 'react';
import styled from 'styled-components';

import { isBigFret } from '../../utils';

interface FretNumberProps {
  value: number;
  size: number;
}

interface FretNumberWrapperProps {
  size: number;
}

const FretNumberWrapper = styled.div<FretNumberWrapperProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 200ms;

  width: ${(props) => props.size}px;
  height: 20px;
  font-size: 12px;
  font-weight: bold;
  margin-top: 12px;
  color: #6e6e6e;
`;

export const FretNumber: FC<FretNumberProps> = ({ value, size }) => {
  return (
    <FretNumberWrapper size={size}>
      <div
        style={{
          fontSize: isBigFret(value) ? 14 : 12,
          color: isBigFret(value) ? '#d1d1d1' : '#6e6e6e',
        }}
      >
        {value}
      </div>
    </FretNumberWrapper>
  );
};
