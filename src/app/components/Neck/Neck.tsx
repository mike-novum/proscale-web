import type { FC } from 'react';
import styled from 'styled-components';

import type { NoteKey, ScaleItem, TuningItem } from '../../utils/tunes';

export interface NeckProps {
  key: NoteKey;
  tuning: TuningItem;
  scale: ScaleItem;
}

const NeckWrapper = styled.div`
  background: #ff9500;
`;

export const Neck: FC<NeckProps> = ({ key, tuning, scale }) => {
  console.log(key);
  console.log(tuning);
  console.log(scale);
  return (
    <NeckWrapper>
      <div>test</div>
    </NeckWrapper>
  );
};
