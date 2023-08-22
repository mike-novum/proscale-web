import styled, { keyframes } from 'styled-components';

import type { ModalWrapperProps } from '../types';

const fadeIn = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
`;

export const ModalWrapper = styled.div<ModalWrapperProps>`
  z-index: 1;
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) =>
    props.overlay ? 'rgba(0,0,0,0.20)' : 'unset'};

  animation-duration: 200ms;
  animation-name: ${fadeIn};
  animation-direction: 'normal';
  animation-timing-function: linear;
  animation-iteration-count: 1;

  &.closing {
    transition: 200ms;
    opacity: 0;
  }
`;
