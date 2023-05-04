import type { FC } from 'react';
import styled from 'styled-components';

import { NOTES, NoteKey } from '../../utils/tunes';
import { ControlButton } from '../../ui';

interface KeyPickerProps {
  active: NoteKey;
  onChange: (key: NoteKey) => void;
}

const PickerWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 24px;
`;

export const KeyPicker: FC<KeyPickerProps> = ({ active, onChange }) => {
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
