import styled from 'styled-components';

import type { NeckDirection } from './types';

interface FretCellProps {
  direction: NeckDirection;
}
export const FretCell = styled.div<FretCellProps>`
  width: ${(props) => (props.direction === 'horizontal' ? '100%' : '2px')};
  height: ${(props) => (props.direction === 'vertical' ? '100%' : '2px')};
  display: flex;
  flex-direction: ${(props) =>
    props.direction === 'vertical' ? 'column' : 'row'};
  align-items: center;
  justify-content: center;
`;
