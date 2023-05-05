/* eslint-disable react/no-array-index-key */
import type { FC } from 'react';
import styled from 'styled-components';

import {
  NoteKey,
  ScaleItem,
  TuningItem,
  generateNeck,
} from '../../utils/tunes';

export interface NeckProps {
  key: NoteKey;
  tuning: TuningItem;
  scale: ScaleItem;
}

const NeckWrapper = styled.div`
  background: #101010;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 24px 0px;
`;

export const Neck: FC<NeckProps> = ({ key, tuning, scale }) => {
  console.log(key);
  console.log(tuning);
  console.log(scale);

  const neckNotes = generateNeck(tuning.notes);

  return (
    <NeckWrapper>
      <div
        style={{
          display: 'flex',
        }}
      >
        {neckNotes.map((fret, fretIndex) => {
          return (
            <div key={fret.join('') + fretIndex} style={{ width: '50px' }}>
              {fret.reverse().map((note, noteIndex) => (
                <p key={note + noteIndex}>{note}</p>
              ))}
            </div>
          );
        })}
      </div>
    </NeckWrapper>
  );
};
