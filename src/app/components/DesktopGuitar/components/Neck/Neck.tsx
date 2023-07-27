/* eslint-disable react/no-array-index-key */
import { useMemo, type FC } from 'react';
import { Note, Scale } from 'tonal';
import type { TuningItem } from 'utils/tunes';
import { useWindowSize } from 'utils/window';

import {
  FretCell,
  FretNumber,
  FretNumbersWrapper,
  FretWrapper,
  FretsWrapper,
  NeckWrapper,
  Note as NoteComponent,
  Strings,
} from './components';
import {
  isBigFret,
  calculateFretWidth,
  generateNeck,
  getFretWidth,
  getNeckHeight,
  isNoteInScale,
} from './utils';
import { FretMarker } from './components/FretMarker';

export interface NeckProps {
  noteKey: string;
  tuning: TuningItem;
  scale: string;
}

export const Neck: FC<NeckProps> = ({ noteKey, tuning, scale }) => {
  const { width: screenWidth } = useWindowSize();

  const neckNotes = useMemo(() => generateNeck(tuning.notes), [tuning]);

  const scaleNotes = useMemo(
    () => Scale.get(`${noteKey} ${scale}`).notes,
    [noteKey, scale]
  );

  const fretSize = getFretWidth(screenWidth);

  return (
    <NeckWrapper>
      <FretsWrapper height={getNeckHeight(tuning.notes.length)}>
        {neckNotes.map((fret, fretIndex) => {
          const width = calculateFretWidth(
            fretIndex,
            fretSize > 80 ? 80 : fretSize
          );

          const _fret = [...fret].reverse();
          return (
            <FretWrapper
              isZeroFret={fretIndex === 0}
              key={fretIndex}
              size={width}
            >
              {_fret.map((note, noteIndex) => (
                <FretCell key={`${fretIndex}-${noteIndex}`}>
                  <NoteComponent
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
          const width = calculateFretWidth(
            fretIndex,
            fretSize > 80 ? 80 : fretSize
          );

          return (
            <FretNumber
              key={fret.join('') + fretIndex}
              value={fretIndex}
              size={width}
            />
          );
        })}
      </FretNumbersWrapper>
    </NeckWrapper>
  );
};
