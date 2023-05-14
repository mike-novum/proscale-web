import { FC, memo } from 'react';
import styled, { keyframes } from 'styled-components';

import type { NoteKey } from '../../utils/tunes';

export interface NoteProps {
  tonica: NoteKey;
  isActive: boolean;
  note: NoteKey;
}

type NoteWrapperProps = {
  isActive: boolean;
  isTonica: boolean;
};

const scaleAnimation = keyframes`
    0%{
        transform: scale(0);
    }    
    100%{
        transform: scale(1);
    }
`;

const SIZE = 32;
const SIZE_M = 28;
const SIZE_S = 22;

const NoteWrapper = styled.div<NoteWrapperProps>`
  background: ${(props) =>
    props.isTonica === true
      ? props.theme.gradients.main
      : props.theme.palette.primary3};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  transition: 200ms;
  animation-name: ${(props) => (props.isActive ? scaleAnimation : 'none')};
  animation-duration: 200ms;
  animation-direction: alternate;
  transform: scale(${(props) => (props.isActive ? '1' : '0')});
  z-index: 1;
  width: ${SIZE}px;
  height: ${SIZE}px;
  border-radius: ${SIZE}px;

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
  text-transform: uppercase;

  @media (max-width: 1366px) {
    font-size: 10px;
  }
`;

const _Note: FC<NoteProps> = ({ note, tonica, isActive }) => {
  return (
    <NoteWrapper isActive={isActive} isTonica={tonica === note}>
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
