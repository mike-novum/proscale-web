import type { FC } from 'react';

import { AllGuitars, Guitar } from '../../utils/tunes';
import { PickerWrapper } from './PickerWrapper';
import { PickerShape } from './PickerShape';
import { PADDING, TAB_SIZE } from './constants';
import { PickerButton } from './PickerButton';

interface GuitarPickerProps {
  active: Guitar;
  onChange: (guitar: Guitar) => void;
}

// TODO: add memo

export const GuitarPicker: FC<GuitarPickerProps> = ({ active, onChange }) => {
  const activeIndex = AllGuitars.findIndex(
    (guitar) => guitar.key === active.key
  );

  return (
    <PickerWrapper>
      <PickerShape
        style={{
          left: activeIndex * TAB_SIZE + 8 * activeIndex + PADDING,
        }}
      />
      {AllGuitars.map((guitar) => {
        return (
          <PickerButton
            key={guitar.key}
            active={guitar.key === active.key}
            onClick={() => {
              onChange(guitar);
            }}
          >
            {guitar.name}
          </PickerButton>
        );
      })}
    </PickerWrapper>
  );
};
