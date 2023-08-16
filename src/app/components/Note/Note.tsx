import { FC, memo, useCallback, useEffect, useState } from 'react';
import { playNote } from 'lib/tone';

import { NoteText, NoteWrapper } from './components';
import type { NoteProps } from './types';

const _Note: FC<NoteProps> = ({
  note,
  isTonica,
  device,
  isActive,
  isFirstFret,
}) => {
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
      device={device}
      onClick={onClick}
      isFirstFret={isFirstFret}
      isActive={show}
      isTonica={isTonica}
    >
      <NoteText device={device}>{note}</NoteText>
    </NoteWrapper>
  );
};

export const Note = memo(_Note, (prevProps, nextProps) => {
  const activeState = prevProps.isActive === nextProps.isActive;
  const tonicaState = prevProps.isTonica === nextProps.isTonica;
  const noteState = prevProps.note === nextProps.note;
  return tonicaState && activeState && noteState;
});
