/* eslint-disable react/no-array-index-key */
import type { FC } from 'react';
import styled from 'styled-components';

import {
  NoteKey,
  ScaleItem,
  TuningItem,
  generateGamma,
  generateNeck,
} from '../../../utils/tunes';
import { useWindowSize } from '../../../utils/window';
import {
  FretCell,
  FretNumber,
  FretNumbersWrapper,
  FretWrapper,
  FretsWrapper,
  NeckWrapper,
  Note,
  Strings,
} from './components';
import { isBigFret } from '../utils';

export interface NeckProps {
  noteKey: NoteKey;
  tuning: TuningItem;
  scale: ScaleItem;
}

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

const FRET_MARKER_SIZE = 18;
const FretMarker = styled.div`
  position: absolute;
  top: calc(50% - ${FRET_MARKER_SIZE / 2}px);
  left: calc(50% - ${FRET_MARKER_SIZE / 2}px);
  width: ${FRET_MARKER_SIZE}px;
  height: ${FRET_MARKER_SIZE}px;
  border-radius: ${FRET_MARKER_SIZE / 2}px;
  background-color: ${(props) => props.theme.palette.black2};
`;

const calculateWidth = (index: number, fretSize: number) =>
  Math.trunc(-Math.sqrt(40 * index) + fretSize);

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

export const DesktopNeck: FC<NeckProps> = ({ noteKey, tuning, scale }) => {
  const neckNotes = generateNeck(tuning.notes);
  const scaleNotes = generateGamma(noteKey, scale.intervals);

  const { width: screenWidth } = useWindowSize();
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
                  <Note
                    isActive={
                      scaleNotes.find((nt) => nt === note) !== undefined
                    }
                    tonica={noteKey}
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
