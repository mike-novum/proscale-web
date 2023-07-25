import { useMemo, type FC } from 'react';
import styled from 'styled-components';
import { Scale } from 'tonal';

import { ControlButton } from '../../ui';

interface ScalePickerProps {
  active: string;
  onChange: (scale: string) => void;
}

const PickerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  justify-content: center;
  gap: 8px;
  max-width: 1024px;
  max-height: 300px;
  overflow: hidden;
  overflow-y: scroll;
  background: ${(props) => props.theme.colors.card};
  box-sizing: border-box;
  border-radius: 20px;
  padding: 16px;
  @media (max-height: 1024px) {
    padding: 12px;
    border-radius: 16px;
  }
  @media (max-height: 768px) {
    padding: 8px;
    border-radius: 12px;
  }
`;

export const ScalePicker: FC<ScalePickerProps> = ({ onChange, active }) => {
  const scaleNames = useMemo(() => Scale.names(), []);
  return (
    <PickerWrapper>
      {scaleNames.map((scale) => {
        return (
          <ControlButton
            active={active === scale}
            key={scale}
            onClick={() => {
              onChange(scale);
            }}
          >
            {scale}
          </ControlButton>
        );
      })}
    </PickerWrapper>
  );
};
