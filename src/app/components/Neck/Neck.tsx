/* eslint-disable react/no-array-index-key */
import type { FC } from 'react';
import styled from 'styled-components';

import {
  NoteKey,
  ScaleItem,
  TuningItem,
  generateGamma,
  generateNeck,
} from '../../utils/tunes';
import { Note } from './Note';

export interface NeckProps {
  noteKey: NoteKey;
  tuning: TuningItem;
  scale: ScaleItem;
}

const NeckWrapper = styled.div`
  position: relative;
  background: #101010;
  height: 300px;
  /* display: flex; */
  /* flex-direction: column;
  justify-content: center; */
  display: flex;
  gap: 3px;
  margin: 24px 0px;
`;

const FretWrapper = styled.div`
  height: 100%;
  position: relative;
  box-sizing: border-box;
  background: #18171f;
  width: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px 0px;
`;

const FretCell = styled.div`
  width: 100%;
  height: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Neck: FC<NeckProps> = ({ noteKey, tuning, scale }) => {
  const neckNotes = generateNeck(tuning.notes);
  const scaleNotes = generateGamma(noteKey, scale.intervals);

  return (
    <NeckWrapper>
      {neckNotes.map((fret, fretIndex) => {
        return (
          <FretWrapper key={fret.join('') + fretIndex}>
            {fret.reverse().map((note, noteIndex) => (
              <FretCell key={note + noteIndex}>
                <Note
                  isActive={scaleNotes.find((nt) => nt === note) !== undefined}
                  tonica={noteKey}
                  note={note}
                />
              </FretCell>
            ))}
          </FretWrapper>
        );
      })}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxSizing: 'border-box',
          padding: '16px 0px',
        }}
      >
        {tuning.notes.map((_, index) => {
          return (
            <div
              key={index}
              style={{
                height: '2px',
                width: '100%',
                background: '#AA84FA',
              }}
            />
          );
        })}
      </div>
    </NeckWrapper>
  );
};
