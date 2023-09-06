/* eslint-disable react/no-array-index-key */
import { useMemo, type FC } from 'react';
import type { TuningItem } from 'lib/tune';
import { Note, Scale } from 'tonal';
import {
  calculateFretSize,
  isBigFret,
  useMobileNeckWidth,
  generateNeck,
  isNoteInScale,
} from 'lib/neck';
import { Note as NoteComponent } from 'components/Note';

import {
  FretCell,
  FretNumber,
  FretNumbersWrapper,
  FretWrapper,
  FretsWrapper,
  NeckWrapper,
  Strings,
} from './components';
import { FretMarker } from './components/FretMarker';

export interface NeckProps {
  noteKey: string;
  tuning: TuningItem;
  scale: string;
}

export const MobileNeck: FC<NeckProps> = ({ noteKey, tuning, scale }) => {
  const neckNotes = useMemo(() => generateNeck(tuning.notes), [tuning]);

  const scaleNotes = useMemo(
    () => Scale.get(`${noteKey} ${scale}`).notes,
    [noteKey, scale]
  );

  const neckWidth = useMobileNeckWidth(tuning.notes.length);

  return (
    <NeckWrapper>
      <FretsWrapper size={neckWidth}>
        {neckNotes.map((fret, fretIndex) => {
          const fretSize = calculateFretSize(fretIndex, 72);

          const _fret = fret;
          return (
            <FretWrapper
              isZeroFret={fretIndex === 0}
              key={fret.join('') + fretIndex}
              size={fretIndex === 0 ? 80 : fretSize}
            >
              {_fret.map((note, noteIndex) => (
                <FretCell key={note + noteIndex}>
                  <NoteComponent
                    device="mobile"
                    isFirstFret={fretIndex === 0}
                    isActive={isNoteInScale(note, scaleNotes)}
                    isTonica={noteKey === Note.pitchClass(note)}
                    note={note}
                  />
                </FretCell>
              ))}
              {isBigFret(fretIndex) ? <FretMarker /> : null}
            </FretWrapper>
          );
        })}
        <Strings count={tuning.notes.length} />
      </FretsWrapper>
      <FretNumbersWrapper>
        {neckNotes.map((fret, fretIndex) => {
          const width = calculateFretSize(fretIndex, 72);

          return (
            <FretNumber
              key={fret.join('') + fretIndex}
              value={fretIndex}
              size={fretIndex === 0 ? 80 : width}
            />
          );
        })}
      </FretNumbersWrapper>
    </NeckWrapper>
  );
};
