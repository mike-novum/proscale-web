import styled from 'styled-components';

import type { NeckDirection } from './types';

interface FretWrapperProps {
  isZeroFret?: boolean;
  size?: number;
  direction: NeckDirection;
}

export const FretWrapper = styled.div<FretWrapperProps>`
  height: 100%;
  position: relative;
  box-sizing: border-box;
  background: ${(props) =>
    props.isZeroFret
      ? props.theme.palette.black3
      : props.theme.palette.primary4};

  border-right: ${(props) => {
    if (props.direction === 'vertical') {
      return 'none';
    }
    return props.isZeroFret ? '8px solid white' : 'none';
  }};

  border-bottom: ${(props) => {
    if (props.direction === 'horizontal') {
      return 'none';
    }
    return props.isZeroFret ? '8px solid white' : 'none';
  }};

  display: flex;
  flex-direction: ${(props) =>
    props.direction === 'vertical' ? 'row' : 'column'};
  justify-content: space-between;
  padding: ${(props) =>
    props.direction === 'vertical' ? '0px 16px' : ' 16px 0px'};
  transition: 0.3s;

  width: ${(props) => {
    if (props.direction === 'vertical') {
      return 'auto';
    }
    return props.size ? `${props.size}px` : '50px';
  }};

  height: ${(props) => {
    if (props.direction === 'horizontal') {
      return 'auto';
    }
    return props.size ? `${props.size}px` : '50px';
  }};
`;
