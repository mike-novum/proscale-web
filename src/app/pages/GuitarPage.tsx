import { FC, useCallback, useState } from 'react';
import styled from 'styled-components';

import {
  GuitarPicker,
  KeyPicker,
  Neck,
  ScalePicker,
  TuningPicker,
} from '../components';
import {
  AllGuitars,
  Guitar,
  GuitarKey,
  NoteKey,
  ScaleItem,
  Scales,
  TuningItem,
  Tunings,
  Tunings6,
} from '../utils/tunes';

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
  max-width: 1440px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const getTunings = (guitarKey: GuitarKey): TuningItem[] => {
  return Tunings[`Tunings${guitarKey}`];
};

export const GuitarPage: FC = () => {
  // TODO: доработать типы и сделать ключи более умными для гаммы
  const [scale, setScale] = useState<ScaleItem>(Scales[0]);
  const [key, setKey] = useState<NoteKey>('C');

  const [guitar, setGuitar] = useState<Guitar>(AllGuitars[0]);

  const [tuning, setTuning] = useState<TuningItem>(Tunings6[0]);

  const [tunings, setTunings] = useState<TuningItem[]>(Tunings6);

  const onChangeGuitar = useCallback((_guitar: Guitar) => {
    const _tunings = getTunings(_guitar.key);
    setGuitar(_guitar);
    setTunings(_tunings);
    setTuning(_tunings[0]);
  }, []);

  return (
    <Page>
      <Content>
        <GuitarPicker active={guitar} onChange={onChangeGuitar} />
        <TuningPicker active={tuning} tunings={tunings} onChange={setTuning} />
        <Neck noteKey={key} tuning={tuning} scale={scale} />
        <KeyPicker active={key} onChange={setKey} />
        <ScalePicker active={scale} onChange={setScale} />
      </Content>
    </Page>
  );
};
