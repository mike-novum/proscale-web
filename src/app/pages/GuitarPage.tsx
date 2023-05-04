import { FC, useState } from 'react';
import styled from 'styled-components';

import { GuitarPicker, KeyPicker, ScalePicker } from '../components';
import type { NoteKey } from '../utils/tunes';

const Page = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  max-width: 1024px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

export const GuitarPage: FC = () => {
  // TODO: доработать типы и сделать ключи более умными для гаммы
  const [scale, setScale] = useState<string>('Natural Min');
  const [key, setKey] = useState<NoteKey>('C');

  return (
    <Page>
      <Content>
        <GuitarPicker />
        {/* <TuningPicker /> */}
        <KeyPicker active={key} onChange={setKey} />
        <ScalePicker active={scale} onChange={setScale} />
      </Content>
    </Page>
  );
};
