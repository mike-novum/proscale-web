import { memo, type FC } from 'react';
import { ControlButton } from 'ui';

import { PickerWrapper } from './compontents';
import { NOTES } from './constants';

interface KeyPickerProps {
  active: string;
  onChange: (key: string) => void;
}

const _KeyPicker: FC<KeyPickerProps> = ({ active, onChange }) => {
  return (
    <PickerWrapper>
      {NOTES.map((item) => {
        return (
          <ControlButton
            formType="circle"
            active={active === item}
            key={item}
            onClick={() => {
              onChange(item);
            }}
          >
            {item}
          </ControlButton>
        );
      })}
    </PickerWrapper>
  );
};

export const KeyPicker = memo(_KeyPicker);
