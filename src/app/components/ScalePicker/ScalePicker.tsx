import type { FC } from 'react';
import styled from 'styled-components';

import { ScaleItem, Scales } from '../../utils/tunes';
import { ControlButton } from '../../ui';

interface ScalePickerProps {
  active: ScaleItem;
  onChange: (scale: ScaleItem) => void;
}

const PickerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  justify-content: center;
  gap: 8px;
  max-width: 1024px;
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
  return (
    <PickerWrapper>
      {Scales.map((scale) => {
        return (
          <ControlButton
            active={active.name === scale.name}
            key={scale.name}
            onClick={() => {
              onChange(scale);
            }}
          >
            {scale.name}
          </ControlButton>
        );
      })}
    </PickerWrapper>
  );
};
