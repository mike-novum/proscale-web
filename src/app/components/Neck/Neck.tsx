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

export interface NeckProps {
  noteKey: NoteKey;
  tuning: TuningItem;
  scale: ScaleItem;
}

const calculateWidth = (index: number) =>
  Math.trunc(-Math.sqrt(40 * index) + 80);

export const Neck: FC<NeckProps> = ({ noteKey, tuning, scale }) => {
  const neckNotes = generateNeck(tuning.notes);
  const scaleNotes = generateGamma(noteKey, scale.intervals);

  return (
    <NeckWrapper>
      <FretsWrapper>
        {neckNotes.map((fret, fretIndex) => {
          const width = calculateWidth(fretIndex);
          return (
            <FretWrapper
              isZeroFret={fretIndex === 0}
              key={fret.join('') + fretIndex}
              width={width}
            >
              {fret.reverse().map((note, noteIndex) => (
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
              <FretNumber value={fretIndex} width={width} />
            </FretWrapper>
          );
        })}
        <Strings count={tuning.notes.length} />
      </FretsWrapper>
    </NeckWrapper>
  );
};
