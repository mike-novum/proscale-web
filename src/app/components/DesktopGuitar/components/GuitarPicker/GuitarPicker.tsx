import { memo, type FC } from 'react';
import { AllGuitars, Guitar } from 'lib/tune';

import { PickerWrapper, PickerShape, PickerButton } from './components';
import { PADDING, TAB_SIZE } from './constants';

interface GuitarPickerProps {
  active: Guitar;
  onChange: (guitar: Guitar) => void;
}

const _GuitarPicker: FC<GuitarPickerProps> = ({ active, onChange }) => {
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

export const GuitarPicker = memo(_GuitarPicker);
