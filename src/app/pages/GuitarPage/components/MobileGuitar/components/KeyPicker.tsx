import type { FC } from 'react';

import { NOTES, NoteKey } from '../../../../../utils/tunes';
import { ControlButton } from '../../../../../ui';
import { PickerWrapper } from './PickerWrapper';

interface KeyPickerProps {
  active: NoteKey;
  onChange: (key: NoteKey) => void;
}

export const KeyPicker: FC<KeyPickerProps> = ({ onChange, active }) => {
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
