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
import { useWindowSize } from '../utils/window';

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
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 32px;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    justify-content: flex-start;
  }
`;

const ScrollView = styled.div`
  overflow: hidden;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  position: relative;
`;

const getTunings = (guitarKey: GuitarKey): TuningItem[] => {
  return Tunings[`Tunings${guitarKey}`];
};

export const GuitarPage: FC = () => {
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

  const { isMobile } = useWindowSize();

  return (
    <Page>
      <ScrollView>
        <Content>
          {isMobile === true ? (
            <Neck
              direction="vertical"
              noteKey={key}
              tuning={tuning}
              scale={scale}
            />
          ) : (
            <>
              <GuitarPicker active={guitar} onChange={onChangeGuitar} />
              <TuningPicker
                active={tuning}
                tunings={tunings}
                onChange={setTuning}
              />
              <Neck
                direction="horizontal"
                noteKey={key}
                tuning={tuning}
                scale={scale}
              />
              <KeyPicker active={key} onChange={setKey} />
              <ScalePicker active={scale} onChange={setScale} />
            </>
          )}
        </Content>
      </ScrollView>
    </Page>
  );
};
