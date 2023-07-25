/* eslint-disable react/no-array-index-key */
import { useMemo, type FC } from 'react';
import styled from 'styled-components';
import { Note, Range, Scale } from 'tonal';

import type { TuningItem } from '../../../utils/tunes';
import { useWindowSize } from '../../../utils/window';
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
import { isBigFret } from '../utils';

export interface NeckProps {
  noteKey: string;
  tuning: TuningItem;
  scale: string;
}

// TODO: move to other file
const getFretWidth = (screenWidth: number | undefined): number => {
  if (screenWidth) {
    if (screenWidth < 768) {
      return 45;
    }

    if (screenWidth < 1024) {
      return 50;
    }
    if (screenWidth < 1366) {
      return 55;
    }
    if (screenWidth < 1440) {
      return 60;
    }
    if (screenWidth < 1600) {
      return 65;
    }
    if (screenWidth < 1920) {
      return 70;
    }
  }
  return 80;
};

// TODO: move to other file
const FRET_MARKER_SIZE = 18;
// TODO: move to other file
const FretMarker = styled.div`
  position: absolute;
  top: calc(50% - ${FRET_MARKER_SIZE / 2}px);
  left: calc(50% - ${FRET_MARKER_SIZE / 2}px);
  width: ${FRET_MARKER_SIZE}px;
  height: ${FRET_MARKER_SIZE}px;
  border-radius: ${FRET_MARKER_SIZE / 2}px;
  background-color: ${(props) => props.theme.palette.black2};
`;

// TODO: move to other file
const calculateWidth = (index: number, fretSize: number) =>
  Math.trunc(-Math.sqrt(40 * index) + fretSize);

// TODO: move to other file
const getNeckHeight = (stringCount: number): number => {
  if (stringCount === 4) {
    return 250;
  }
  if (stringCount === 7) {
    return 310;
  }
  if (stringCount === 8) {
    return 320;
  }

  return 300;
};

// TODO: move to other file
const generateNeck = (tuning: TuningItem): string[][] => {
  const fretsCount = 25;
  const rez = tuning.notes.map((note) => {
    const noteSymbol = Note.pitchClass(note);
    const startOctave = Note.octave(note) || 1;

    return Range.chromatic([note, noteSymbol + (startOctave + 2)], {
      sharps: false,
    });
  });

  const mass: string[][] = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < fretsCount; i++) {
    const fret: string[] = [];

    rez.forEach((item) => {
      fret.push(item[i]);
    });
    mass.push(fret);
  }

  return mass;
};
// TODO: move to other file
const isNoteFromScale = (note: string, scaleNotes: string[]): boolean => {
  return scaleNotes.includes(Note.pitchClass(note));
};

export const DesktopNeck: FC<NeckProps> = ({ noteKey, tuning, scale }) => {
  const { width: screenWidth } = useWindowSize();

  const neckNotes = useMemo(() => generateNeck(tuning), [tuning]);
  const scaleNotes = useMemo(
    () => Scale.get(`${noteKey} ${scale}`).notes,
    [noteKey, scale]
  );

  const fretSize = getFretWidth(screenWidth);

  return (
    <NeckWrapper>
      <FretsWrapper height={getNeckHeight(tuning.notes.length)}>
        {neckNotes.map((fret, fretIndex) => {
          const width = calculateWidth(
            fretIndex,
            fretSize > 80 ? 80 : fretSize
          );

          const _fret = fret.reverse();
          return (
            <FretWrapper
              isZeroFret={fretIndex === 0}
              key={fret.join('') + fretIndex}
              size={width}
            >
              {_fret.map((note, noteIndex) => (
                <FretCell key={note + noteIndex}>
                  <NoteComponent
                    isFirstFret={fretIndex === 0}
                    isActive={isNoteFromScale(note, scaleNotes)}
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
          const width = calculateWidth(
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
