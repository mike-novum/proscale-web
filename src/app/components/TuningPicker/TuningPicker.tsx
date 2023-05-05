import type { FC } from 'react';
import styled from 'styled-components';

import { ControlButton } from '../../ui';
import type { TuningItem } from '../../utils/tunes';

interface TuningPickerProps {
  active: TuningItem;
  onChange: (tuningItem: TuningItem) => void;
  tunings: TuningItem[];
}

const PickerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 24px;
`;

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
