import styled from 'styled-components';

import type { NeckDirection } from './types';

interface FretsWrapperProps {
  direction: NeckDirection;
}
export const FretsWrapper = styled.div<FretsWrapperProps>`
  position: relative;
  background: #101010;
  transition: 200ms;
  height: ${(props) => (props.direction === 'vertical' ? 'auto' : '300px')};
  width: ${(props) => (props.direction === 'vertical' ? '320px' : undefined)};
  display: flex;
  flex-direction: ${(props) =>
    props.direction === 'vertical' ? 'column' : 'row'};
  gap: 4px;
  margin: 48px 0px;

  @media (max-width: 1024px) {
    width: 320px;
  }
  @media (max-width: 768px) {
    width: 320px;
  }
  @media (max-width: 375px) {
    width: 260px;
  }
`;
