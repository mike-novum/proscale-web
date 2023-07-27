/* eslint-disable react/no-array-index-key */
import type { FC } from 'react';
import {
  NoteKey,
  ScaleItem,
  TuningItem,
  generateGamma,
  generateNeck,
} from 'lib/tune';

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
import { calculateFretSize, isBigFret, useMobileNeckWidth } from './utils';
import { FretMarker } from './components/FretMarker';

export interface NeckProps {
  noteKey: NoteKey;
  tuning: TuningItem;
  scale: ScaleItem;
}

export const MobileNeck: FC<NeckProps> = ({ noteKey, tuning, scale }) => {
  const neckNotes = generateNeck(tuning.notes);
  const scaleNotes = generateGamma(noteKey, scale.intervals);

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
                  <Note
                    isFirstFret={fretIndex === 0}
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
