import type { FC } from 'react';

import { AllGuitars, Guitar } from '../../../../../utils/tunes';
import { ControlButton } from '../../../../../ui';
import { PickerWrapper } from './PickerWrapper';

interface GuitarPickerProps {
  active: Guitar;
  onChange: (guitar: Guitar) => void;
}

export const GuitarPicker: FC<GuitarPickerProps> = ({ onChange, active }) => {
  return (
    <PickerWrapper>
      {AllGuitars.map((guitar) => {
        return (
          <ControlButton
            key={guitar.key}
            active={guitar.key === active.key}
            onClick={() => {
              onChange(guitar);
            }}
          >
            {guitar.name}
          </ControlButton>
        );
      })}
    </PickerWrapper>
  );
};
