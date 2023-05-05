import { FC, memo } from 'react';
import styled, { keyframes } from 'styled-components';

import type { NoteKey } from '../../utils/tunes';

export interface NoteProps {
  tonica: NoteKey;
  isActive: boolean;
  note: NoteKey;
}

const SIZE = 32;

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

const NoteWrapper = styled.div<NoteWrapperProps>`
  background-color: ${(props) =>
    props.isTonica === true ? 'rgb(183 129 255)' : 'rgb(91 75 113)'};
  width: ${SIZE}px;
  height: ${SIZE}px;
  border-radius: ${SIZE / 2}px;
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
`;

const NoteText = styled.div`
  color: #fff;
  font-size: 12px;
  line-height: 12px;
  font-weight: 600;
  text-transform: uppercase;
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
