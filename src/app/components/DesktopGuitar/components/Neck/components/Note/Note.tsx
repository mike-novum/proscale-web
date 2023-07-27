import { FC, memo, useCallback, useEffect, useState } from 'react';
import { playNote } from 'lib/tone';

import { NoteText, NoteWrapper } from './components';

export interface NoteProps {
  isTonica: boolean;
  isActive: boolean;
  note: string;
  isFirstFret: boolean;
}

const _Note: FC<NoteProps> = ({ note, isTonica, isActive, isFirstFret }) => {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    if (isActive !== show) {
      setShow(isActive);
    }
  }, [isActive, show]);

  const onClick = useCallback(() => {
    playNote(note);
  }, [note]);

  return (
    <NoteWrapper
      onClick={onClick}
      isFirstFret={isFirstFret}
      isActive={show}
      isTonica={isTonica}
    >
      <NoteText>{note}</NoteText>
    </NoteWrapper>
  );
};

export const Note = memo(_Note, (prevProps, nextProps) => {
  const activeState = prevProps.isActive === nextProps.isActive;
  const tonicaState = prevProps.isTonica === nextProps.isTonica;
  const noteState = prevProps.note === nextProps.note;
  return tonicaState && activeState && noteState;
});
