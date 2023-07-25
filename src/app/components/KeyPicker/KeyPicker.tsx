import type { FC } from 'react';
import styled from 'styled-components';

import { ControlButton } from '../../ui';

interface KeyPickerProps {
  active: string;
  onChange: (key: string) => void;
}

const PickerWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  max-width: 1024px;
  background: ${(props) => props.theme.colors.card};
  box-sizing: border-box;
  padding: 16px;
  border-radius: 20px;

  @media (max-height: 1024px) {
    padding: 12px;
    border-radius: 16px;
  }
  @media (max-height: 768px) {
    padding: 8px;
    border-radius: 12px;
  }
`;

export const KeyPicker: FC<KeyPickerProps> = ({ active, onChange }) => {
  return (
    <PickerWrapper>
      {['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'].map(
        (item) => {
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
        }
      )}
    </PickerWrapper>
  );
};
