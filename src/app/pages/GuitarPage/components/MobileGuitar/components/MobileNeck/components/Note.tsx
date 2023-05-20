import { FC, memo, useEffect, useState } from 'react';
import styled from 'styled-components';

import type { NoteKey } from '../../../../../../../utils/tunes';

export interface NoteProps {
  tonica: NoteKey;
  isActive: boolean;
  note: NoteKey;
}

type NoteWrapperProps = {
  isActive: boolean;
  isTonica: boolean;
};

const SIZE = 32;

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
  transition: 300ms;
  transform: scale(${(props) => (props.isActive ? '1' : '0')});
  opacity: ${(props) => (props.isActive ? '1' : '0')};
  background: ${(props) =>
    props.isTonica === true
      ? props.theme.gradients.main
      : props.theme.colors.primary};
`;

const NoteText = styled.div`
  color: #fff;
  font-size: 12px;
  line-height: 12px;
  font-weight: 600;
  text-transform: uppercase;
  font-family: system-ui, sans-serif;
`;

const _Note: FC<NoteProps> = ({ note, tonica, isActive }) => {
  const [show, setShow] = useState<boolean>(false);
  useEffect(() => {
    if (isActive !== show) {
      setShow(isActive);
    }
  }, [isActive, show]);

  return (
    <NoteWrapper isActive={show} isTonica={tonica === note}>
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
