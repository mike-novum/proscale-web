import { FC, useCallback, useState } from 'react';
import {
  AllGuitars,
  Guitar,
  NoteKey,
  ScaleItem,
  Scales,
  TuningItem,
  Tunings6,
  getTunings,
} from 'lib/tune';

import {
  ControlTabs,
  ControlPanelWrapper,
  KeyPicker,
  ScalePicker,
  TuningPicker,
  GuitarPicker,
  Scroll,
  MobileNeck,
} from './components';

export const MobileGuitar: FC = () => {
  const [tab, setTab] = useState<number>(0);

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
    <>
      <Scroll>
        <MobileNeck noteKey={key} tuning={tuning} scale={scale} />
      </Scroll>
      <ControlPanelWrapper expanded={tab === 3}>
        {tab === 0 ? <ScalePicker active={scale} onChange={setScale} /> : null}
        {tab === 1 ? <KeyPicker active={key} onChange={setKey} /> : null}
        {tab === 2 ? (
          <TuningPicker
            active={tuning}
            tunings={tunings}
            onChange={setTuning}
          />
        ) : null}
        {tab === 3 ? (
          <GuitarPicker active={guitar} onChange={onChangeGuitar} />
        ) : null}
        <ControlTabs activeTab={tab} onChange={setTab} />
      </ControlPanelWrapper>
    </>
  );
};
