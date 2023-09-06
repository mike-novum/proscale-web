import styled, { css } from 'styled-components';

import type { NoteWrapperProps } from '../types';

const SIZE = 32;
const SIZE_M = 28;
const SIZE_S = 22;

const MOBILE_SIZE = 32;
const MOBILE_SIZE_M = 30;
const MOBILE_SIZE_S = 28;

const mobileStyles = css`
  width: ${MOBILE_SIZE}px;
  height: ${MOBILE_SIZE}px;
  border-radius: ${MOBILE_SIZE}px;

  @media (max-width: 414px) {
    width: ${MOBILE_SIZE_M}px;
    height: ${MOBILE_SIZE_M}px;
    border-radius: ${MOBILE_SIZE_M}px;
  }
  @media (max-width: 368px) {
    width: ${MOBILE_SIZE_S}px;
    height: ${MOBILE_SIZE_S}px;
    border-radius: ${MOBILE_SIZE_S}px;
  }
`;

const desktopStyles = css`
  width: ${SIZE}px;
  height: ${SIZE}px;
  border-radius: ${SIZE}px;

  &:hover {
    box-shadow: rgb(76 80 121) 0px 0px 20px 2px;
  }

  &:active {
    opacity: 0.7;
    scale: 0.97;
  }

  @media (max-width: 1366px) {
    width: ${SIZE_M}px;
    height: ${SIZE_M}px;
    border-radius: ${SIZE_M}px;
  }
  @media (max-width: 1024px) {
    width: ${SIZE}px;
    height: ${SIZE}px;
    border-radius: ${SIZE}px;
  }
  @media (max-width: 768px) {
    width: ${SIZE_M}px;
    height: ${SIZE_M}px;
    border-radius: ${SIZE_M}px;
  }
  @media (max-width: 375px) {
    width: ${SIZE_S}px;
    height: ${SIZE_S}px;
    border-radius: ${SIZE_S}px;
  }
`;

export const NoteWrapper = styled.div<NoteWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  user-select: none;
  cursor: pointer;
  z-index: 1;
  transition: 400ms;

  transform: scale(
    ${(props) => (props.isActive || props.isFirstFret ? '1' : '0')}
  );
  opacity: ${(props) => (props.isActive || props.isFirstFret ? '1' : '0')};
  border: ${(props) =>
    props.isFirstFret ? `1px solid ${props.theme.colors.primary}` : 'none'};
  background: ${(props) => {
    if (props.isFirstFret === true) {
      if (props.isTonica === true) {
        return props.theme.gradients.main;
      }
      if (props.isActive === true) {
        return props.theme.colors.primary;
      }
      return props.theme.colors.notification;
    }

    return props.isTonica === true
      ? props.theme.gradients.main
      : props.theme.colors.primary;
  }};

  ${(props) => (props.device === 'mobile' ? mobileStyles : desktopStyles)}
`;
