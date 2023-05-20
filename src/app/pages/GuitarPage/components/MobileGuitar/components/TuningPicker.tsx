import type { FC } from 'react';

import { PickerWrapper } from './PickerWrapper';
import type { TuningItem } from '../../../../../utils/tunes';
import { ControlButton } from '../../../../../ui';

interface TuningPickerProps {
  active: TuningItem;
  onChange: (tuningItem: TuningItem) => void;
  tunings: TuningItem[];
}

export const TuningPicker: FC<TuningPickerProps> = ({
  onChange,
  active,
  tunings,
}) => {
  return (
    <PickerWrapper>
      {tunings.map((item) => {
        return (
          <ControlButton
            active={active.name === item.name}
            key={item.name}
            onClick={() => {
              onChange(item);
            }}
          >
            {item.name}
          </ControlButton>
        );
      })}
    </PickerWrapper>
  );
};
