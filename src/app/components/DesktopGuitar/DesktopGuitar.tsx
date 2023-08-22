import { FC, useCallback, useRef, useState } from 'react';
import { AllGuitars, Guitar, TuningItem, Tunings6 } from 'lib/tune';
import { getTunings } from 'lib/tune/utils';
import styled from 'styled-components';
import { ControlButton } from 'ui/ControllButton';
import type { ModalRef } from 'ui/Modal';

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
        <ControlButton onClick={onClickScale}>
          <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 21C8.9 21 7.95833 20.6083 7.175 19.825C6.39167 19.0417 6 18.1 6 17C6 15.9 6.39167 14.9583 7.175 14.175C7.95833 13.3917 8.9 13 10 13C10.3833 13 10.7377 13.046 11.063 13.138C11.3883 13.23 11.7007 13.3673 12 13.55V3H18V7H14V17C14 18.1 13.6083 19.0417 12.825 19.825C12.0417 20.6083 11.1 21 10 21Z"
                fill="white"
              />
            </svg>
            <span style={{ textTransform: 'capitalize' }}>
              {scale.toUpperCase()}
            </span>
          </div>
        </ControlButton>
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
