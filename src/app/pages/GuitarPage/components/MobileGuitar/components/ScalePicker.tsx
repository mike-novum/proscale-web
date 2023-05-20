import type { FC } from 'react';

import { ScaleItem, Scales } from '../../../../../utils/tunes';
import { ControlButton } from '../../../../../ui';
import { PickerWrapper } from './PickerWrapper';

interface ScalePickerProps {
  active: ScaleItem;
  onChange: (scale: ScaleItem) => void;
}

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
