import styled from 'styled-components';

type NoteWrapperProps = {
  isActive: boolean;
  isTonica: boolean;
  isFirstFret: boolean;
};

const SIZE = 32;
const SIZE_M = 28;
const SIZE_S = 22;

export const NoteWrapper = styled.div<NoteWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  user-select: none;

  cursor: pointer;

  z-index: 1;
  width: ${SIZE}px;
  height: ${SIZE}px;
  border-radius: ${SIZE}px;
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

  transition: 0.2s;

  &:hover {
    transition: 0.2s;
    scale: 1.07;
  }
  &:active {
    transition: 0.2s;
    opacity: 0.7;
    scale: 0.97;
  }

  @media (max-width: 1366px) {
    transition: 200ms;
    width: ${SIZE_M}px;
    height: ${SIZE_M}px;
    border-radius: ${SIZE_M}px;
  }
  @media (max-width: 1024px) {
    transition: 200ms;
    width: ${SIZE}px;
    height: ${SIZE}px;
    border-radius: ${SIZE}px;
  }
  @media (max-width: 768px) {
    transition: 200ms;
    width: ${SIZE_M}px;
    height: ${SIZE_M}px;
    border-radius: ${SIZE_M}px;
  }
  @media (max-width: 375px) {
    transition: 200ms;
    width: ${SIZE_S}px;
    height: ${SIZE_S}px;
    border-radius: ${SIZE_S}px;
  }
`;
