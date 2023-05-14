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
  margin-top: 24px;
  max-width: 1024px;
  background: rgb(48 53 73);
  box-sizing: border-box;
  padding: 16px;
  border-radius: 20px;
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
