/* eslint-disable react/no-array-index-key */
import type { FC } from 'react';

import {
  NoteKey,
  ScaleItem,
  TuningItem,
  generateGamma,
  generateNeck,
} from '../../utils/tunes';
import { Note } from './Note';
import { Strings } from './Strings';
import { FretWrapper } from './FretWrapper';
import { FretCell } from './FretCell';
import { NeckWrapper } from './NeckWrapper';
import { FretsWrapper } from './FretsWrapper';
import { FretNumber } from './FretNumbers';
import { useWindowSize } from '../../utils/window';
import type { NeckDirection } from './types';

export interface NeckProps {
  noteKey: NoteKey;
  tuning: TuningItem;
  scale: ScaleItem;
  direction?: NeckDirection;
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

const calculateWidth = (index: number, fretSize: number) =>
  Math.trunc(-Math.sqrt(40 * index) + fretSize);

export const Neck: FC<NeckProps> = ({
  noteKey,
  tuning,
  scale,
  direction = 'horizontal',
}) => {
  const neckNotes = generateNeck(tuning.notes);
  const scaleNotes = generateGamma(noteKey, scale.intervals);

  const { width: screenWidth } = useWindowSize();
  const fretSize = direction === 'vertical' ? 65 : getFretWidth(screenWidth);

  return (
    <NeckWrapper>
      <FretsWrapper direction={direction}>
        {neckNotes.map((fret, fretIndex) => {
          const width = calculateWidth(
            fretIndex,
            fretSize > 80 ? 80 : fretSize
          );

          const _fret = direction === 'vertical' ? fret : fret.reverse();
          return (
            <FretWrapper
              isZeroFret={fretIndex === 0}
              key={fret.join('') + fretIndex}
              size={width}
              direction={direction}
            >
              {_fret.map((note, noteIndex) => (
                <FretCell direction={direction} key={note + noteIndex}>
                  <Note
                    isActive={
                      scaleNotes.find((nt) => nt === note) !== undefined
                    }
                    tonica={noteKey}
                    note={note}
                  />
                </FretCell>
              ))}
              <FretNumber
                direction={direction}
                value={fretIndex}
                size={width}
              />
            </FretWrapper>
          );
        })}
        <Strings direction={direction} count={tuning.notes.length} />
      </FretsWrapper>
    </NeckWrapper>
  );
};
