import type { FC } from 'react';
import styled from 'styled-components';

import type { NeckDirection } from './types';

type StringProps = {
  direction: NeckDirection;
};
interface StringsProps {
  count: number;
  direction: NeckDirection;
}

const StringsWrapper = styled.div<StringProps>`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: ${(props) =>
    props.direction === 'vertical' ? 'row' : 'column'};
  justify-content: space-between;
  box-sizing: border-box;
  padding: ${(props) =>
    props.direction === 'vertical' ? '0px 16px' : ' 16px 0px'};
`;

const String = styled.div<StringProps>`
  height: ${(props) => (props.direction === 'vertical' ? '100%' : '2px')};
  width: ${(props) => (props.direction === 'horizontal' ? '100%' : '2px')};
  background: ${(props) => props.theme.palette.primary2};
`;

export const Strings: FC<StringsProps> = ({ count, direction }) => {
  return (
    <StringsWrapper direction={direction}>
      {Array.from({ length: count }, (v, k) => k).map((_, index) => {
        return (
          <String
            direction={direction}
            // eslint-disable-next-line react/no-array-index-key
            key={index}
          />
        );
      })}
    </StringsWrapper>
  );
};
