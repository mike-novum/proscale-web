import { FC, useCallback, useState } from 'react';
import { AllGuitars, Guitar, TuningItem, Tunings6 } from 'utils/tunes';
import { getTunings } from 'utils/tunes/utils';

import {
  Neck,
  GuitarPicker,
  KeyPicker,
  ScalePicker,
  TuningPicker,
  DesktopWrapper,
} from './components';

export const DesktopGuitar: FC = () => {
  const [scale, setScale] = useState<string>('minor');
  const [key, setKey] = useState<string>('C');

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
      <Neck noteKey={key} tuning={tuning} scale={scale} />
      <KeyPicker active={key} onChange={setKey} />
      <ScalePicker active={scale} onChange={setScale} />
    </DesktopWrapper>
  );
};
