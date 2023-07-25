import { FC, memo, useEffect, useState } from 'react';
import styled from 'styled-components';

export interface NoteProps {
  tonica: string;
  isActive: boolean;
  note: string;
  isFirstFret: boolean;
}

type NoteWrapperProps = {
  isActive: boolean;
  isTonica: boolean;
  isFirstFret: boolean;
};

const SIZE = 32;
const SIZE_M = 28;
const SIZE_S = 22;

const NoteWrapper = styled.div<NoteWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  user-select: none;

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

const NoteText = styled.div`
  color: #fff;
  font-size: 12px;
  line-height: 12px;
  font-weight: 600;
  text-transform: capitalize;
  font-family: system-ui, sans-serif;

  @media (max-width: 1366px) {
    font-size: 10px;
  }
`;

const _Note: FC<NoteProps> = ({ note, tonica, isActive, isFirstFret }) => {
  const [show, setShow] = useState<boolean>(false);
  useEffect(() => {
    if (isActive !== show) {
      setShow(isActive);
    }
  }, [isActive, show]);

  return (
    <NoteWrapper
      isFirstFret={isFirstFret}
      isActive={show}
      isTonica={tonica === note}
    >
      <NoteText>{note}</NoteText>
    </NoteWrapper>
  );
};

export const Note = memo(_Note, (prevProps, nextProps) => {
  const oldState = prevProps.note === prevProps.tonica;
  const newState = nextProps.note === nextProps.tonica;
  const activeState = prevProps.isActive === nextProps.isActive;
  return oldState === newState && activeState;
});
