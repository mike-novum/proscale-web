import { memo, type FC } from 'react';
import { Button } from 'ui';

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
          <Button
            shape="circle"
            type={active === item ? 'primary' : 'default'}
            key={item}
            onClick={() => {
              onChange(item);
            }}
          >
            {item}
          </Button>
        );
      })}
    </PickerWrapper>
  );
};

export const KeyPicker = memo(_KeyPicker);
