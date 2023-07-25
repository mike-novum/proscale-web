import { FC, useCallback, useState } from 'react';

import {
  DesktopNeck,
  GuitarPicker,
  KeyPicker,
  ScalePicker,
  TuningPicker,
} from '..';
import {
  AllGuitars,
  Guitar,
  NoteKey,
  TuningItem,
  Tunings6,
} from '../../utils/tunes';
import { DesktopWrapper } from './components';
import { getTunings } from '../../utils/tunes/utils';

export const DesktopGuitar: FC = () => {
  const [scale, setScale] = useState<string>('minor');
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
