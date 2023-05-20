/* eslint-disable react/no-array-index-key */
import type { FC } from 'react';
import styled from 'styled-components';

import {
  NoteKey,
  ScaleItem,
  TuningItem,
  generateGamma,
  generateNeck,
} from '../../../../../../utils/tunes';
import {
  FretCell,
  FretWrapper,
  FretsWrapper,
  NeckWrapper,
  Note,
  Strings,
} from './components';
import { isBigFret } from './utils';

export interface NeckProps {
  noteKey: NoteKey;
  tuning: TuningItem;
  scale: ScaleItem;
}

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

const calculateFretSize = (index: number, fretSize: number) =>
  Math.trunc(-Math.sqrt(40 * index) + fretSize);

const neckWidth = window.innerWidth - 16 * 4;

const getNeckSize = (stringCount: number): number => {
  const stringWidth = 10;
  if (stringCount === 4) {
    return neckWidth - stringWidth * 2;
  }
  if (stringCount === 7) {
    return neckWidth + stringWidth;
  }
  if (stringCount === 8) {
    return neckWidth + stringWidth * 2;
  }

  return neckWidth;
};

export const MobileNeck: FC<NeckProps> = ({ noteKey, tuning, scale }) => {
  const neckNotes = generateNeck(tuning.notes);
  const scaleNotes = generateGamma(noteKey, scale.intervals);

  return (
    <NeckWrapper>
      <FretsWrapper size={getNeckSize(tuning.notes.length)}>
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
    </NeckWrapper>
  );
};
