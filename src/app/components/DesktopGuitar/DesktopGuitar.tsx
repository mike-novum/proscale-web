import { FC, useCallback, useMemo, useRef, useState } from 'react';
import { AllGuitars, Guitar, TuningItem, Tunings6 } from 'lib/tune';
import { getTunings } from 'lib/tune/utils';
import styled from 'styled-components';
import type { ModalRef } from 'ui/Modal';
import { LuSettings2 } from 'react-icons/lu';
import { Scale } from 'tonal';
import { MultiButton } from 'ui/MultiButton';
import { getChordName, type ChordType, getChordNotes } from 'lib/tonal';

import {
  Neck,
  GuitarPicker,
  KeyPicker,
  TuningPicker,
  DesktopWrapper,
} from './components';
import { ScalesModal } from '../ScalesModal';
import { ChordsModal } from '../ChordsModal';

const ControlsWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  max-width: 1024px;
  background: ${(props) => props.theme.colors.card};
  box-sizing: border-box;
  padding: 16px;
  border-radius: 20px;

  @media (max-height: 1024px) {
    padding: 12px;
    border-radius: 16px;
  }
  @media (max-height: 768px) {
    padding: 8px;
    border-radius: 12px;
  }
`;

const initChord: ChordType = {
  aliases: ['m', 'min', '-'],
  chroma: '100100010000',
  empty: false,
  intervals: ['1P', '3m', '5P'],
  name: 'minor',
  normalized: '100001001000',
  quality: 'Minor',
  setNum: 2320,
};

type Mode = 'scale' | 'chord';

export const DesktopGuitar: FC = () => {
  const [mode, setMode] = useState<Mode>('scale');

  const [scale, setScale] = useState<string>('minor');
  const [chord, setChord] = useState<ChordType>(initChord);

  const [key, setKey] = useState<string>('C');

  const [guitar, setGuitar] = useState<Guitar>(AllGuitars[0]);

  const [tuning, setTuning] = useState<TuningItem>(Tunings6[0]);

  const [tunings, setTunings] = useState<TuningItem[]>(Tunings6);

  const clickMode = useCallback(
    (_mode: Mode) => () => setMode(_mode),
    [setMode]
  );

  const onChangeGuitar = useCallback((_guitar: Guitar) => {
    const _tunings = getTunings(_guitar.key);
    setGuitar(_guitar);
    setTunings(_tunings);
    setTuning(_tunings[0]);
  }, []);

  const modalRef = useRef<ModalRef | null>(null);
  const chordsModalRef = useRef<ModalRef | null>(null);

  const onClickScale = useCallback(() => {
    if (modalRef) {
      modalRef.current?.open();
    }
  }, []);

  const onClickChord = useCallback(() => {
    if (chordsModalRef) {
      chordsModalRef.current?.open();
    }
  }, []);

  const onChangeScale = useCallback(
    (scaleName: string) => {
      setScale(scaleName);
      clickMode('scale')();
      modalRef.current?.close();
    },
    [clickMode]
  );

  const onChangeChord = useCallback(
    (_chord: ChordType) => {
      setChord(_chord);
      clickMode('chord')();
      chordsModalRef.current?.close();
    },
    [clickMode]
  );

  const scaleNotes = useMemo(
    () => Scale.get(`${key} ${scale}`).notes,
    [key, scale]
  );

  const visibleNotes =
    mode === 'scale' ? scaleNotes : getChordNotes(key, chord);

  return (
    <DesktopWrapper>
      <GuitarPicker active={guitar} onChange={onChangeGuitar} />
      <TuningPicker active={tuning} tunings={tunings} onChange={setTuning} />
      <Neck noteKey={key} tuning={tuning} visibleNotes={visibleNotes} />
      <ControlsWrapper>
        <MultiButton
          active={mode === 'scale'}
          Icon={LuSettings2}
          iconSize={18}
          label={scale.toUpperCase()}
          onClick={clickMode('scale')}
          onClickSub={onClickScale}
        />
        <MultiButton
          active={mode === 'chord'}
          Icon={LuSettings2}
          iconSize={18}
          label={getChordName(key, chord)}
          onClick={clickMode('chord')}
          onClickSub={onClickChord}
        />
        <KeyPicker active={key} onChange={setKey} />
      </ControlsWrapper>
      <ScalesModal
        activeScale={scale}
        ref={modalRef}
        onChangeScale={onChangeScale}
      />
      <ChordsModal
        activeKey={key}
        activeChord={chord}
        ref={chordsModalRef}
        onChangeChord={onChangeChord}
      />
    </DesktopWrapper>
  );
};
