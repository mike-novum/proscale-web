import { FC, useCallback, useRef, useState } from 'react';
import { AllGuitars, Guitar, TuningItem, Tunings6 } from 'lib/tune';
import { getTunings } from 'lib/tune/utils';
import styled from 'styled-components';
import type { ModalRef } from 'ui/Modal';
import { Button } from 'ui/Button';
import { PiPianoKeysFill } from 'react-icons/pi';

import {
  Neck,
  GuitarPicker,
  KeyPicker,
  TuningPicker,
  DesktopWrapper,
} from './components';
import { ScalesModal } from '../ScalesModal';

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

  const modalRef = useRef<ModalRef | null>(null);
  const onClickScale = useCallback(() => {
    if (modalRef) {
      modalRef.current?.open();
    }
  }, []);

  const onChangeScale = useCallback((scaleName: string) => {
    setScale(scaleName);
    modalRef.current?.close();
  }, []);

  return (
    <DesktopWrapper>
      <GuitarPicker active={guitar} onChange={onChangeGuitar} />
      <TuningPicker active={tuning} tunings={tunings} onChange={setTuning} />
      <Neck noteKey={key} tuning={tuning} scale={scale} />
      <ControlsWrapper>
        <Button onClick={onClickScale} Icon={PiPianoKeysFill}>
          {scale.toUpperCase()}
        </Button>
        <KeyPicker active={key} onChange={setKey} />
      </ControlsWrapper>
      <ScalesModal
        activeScale={scale}
        ref={modalRef}
        onChangeScale={onChangeScale}
      />
    </DesktopWrapper>
  );
};
