import styled from 'styled-components';

import type { ButtonWrapperProps } from './types';

const sizes = {
  small: 32,
  default: 44,
  large: 56,
};

const paddings = {
  small: 16,
  default: 22,
  large: 28,
};
const weights = {
  small: 400,
  default: 600,
  large: 600,
};

const fontSizes = {
  small: 12,
  default: 14,
  large: 16,
};

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: ${(props) => weights[props.size]};
  color: ${(props) => props.theme.palette.text};
  border: none;
  height: ${(props) => sizes[props.size]}px;
  border-radius: ${(props) => sizes[props.size] / 2}px;
  padding: 0px ${(props) => paddings[props.size]}px;
  font-size: ${(props) => fontSizes[props.size]}px;
  cursor: pointer;

  transition: 200ms;
  &:active {
    opacity: 0.7;
  }

  &:hover {
    background-color: #35374e;
    box-shadow: rgb(76 84 123) 0px 0px 20px -10px;
  }
`;

export const Wrappers = {
  defaultWrapper: styled(ButtonWrapper)`
    background-color: ${(props) => props.theme.colors.notification};
  `,

  outlinedWrapper: styled(ButtonWrapper)`
    border: 1px solid ${(props) => props.theme.colors.notification};
    background-color: transparent;
  `,
  primaryWrapper: styled(ButtonWrapper)`
    border: none;
    background: linear-gradient(45deg, rgb(250 118 223), rgb(72 98 200));
  `,
  ghostWrapper: styled(ButtonWrapper)`
    background-color: transparent;
  `,
};
