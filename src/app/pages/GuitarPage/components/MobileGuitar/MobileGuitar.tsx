import { FC, useCallback, useState } from 'react';
import styled from 'styled-components';

import { ControlTabs } from './components/ControlTabs';
import {
  AllGuitars,
  Guitar,
  NoteKey,
  ScaleItem,
  Scales,
  TuningItem,
  Tunings6,
} from '../../../../utils/tunes';
import { ScalePicker } from './components/ScalePicker';
import { KeyPicker } from './components/KeyPicker';
import { TuningPicker } from './components/TuningPicker';
import { getTunings } from '../utils';
import { GuitarPicker } from './components/GuitarPicker';
import { MobileNeck } from './components/MobileNeck';

const Scroll = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  overflow-y: auto;
`;

const ControlPanelWrapper = styled.div`
  border-radius: 16px;
  background-color: ${(props) => props.theme.colors.card};
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

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
      <ControlPanelWrapper>
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
