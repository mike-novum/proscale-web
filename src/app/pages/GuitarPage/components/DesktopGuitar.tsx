import { FC, useCallback, useState } from 'react';
import styled from 'styled-components';

import {
  DesktopNeck,
  GuitarPicker,
  KeyPicker,
  ScalePicker,
  TuningPicker,
} from '../../../components';
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
} from '../../../utils/tunes';

const getTunings = (guitarKey: GuitarKey): TuningItem[] => {
  return Tunings[`Tunings${guitarKey}`];
};

const DesktopWrapper = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;

  @media (max-height: 1024px) {
    gap: 16px;
  }
  @media (max-height: 768px) {
    gap: 8px;
    justify-content: space-around;
  }
`;

export const DesktopGuitarPage: FC = () => {
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
    <DesktopWrapper>
      <GuitarPicker active={guitar} onChange={onChangeGuitar} />
      <TuningPicker active={tuning} tunings={tunings} onChange={setTuning} />
      <DesktopNeck noteKey={key} tuning={tuning} scale={scale} />
      <KeyPicker active={key} onChange={setKey} />
      <ScalePicker active={scale} onChange={setScale} />
    </DesktopWrapper>
  );
};
