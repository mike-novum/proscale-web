import { memo, type FC } from 'react';
import styled from 'styled-components';
import { Button } from 'ui';
import type { TuningItem } from 'lib/tune';

interface TuningPickerProps {
  active: TuningItem;
  onChange: (tuningItem: TuningItem) => void;
  tunings: TuningItem[];
}

const PickerWrapper = styled.div`
  box-sizing: border-box;
  padding: 0px 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
`;

const _TuningPicker: FC<TuningPickerProps> = ({
  onChange,
  active,
  tunings,
}) => {
  return (
    <PickerWrapper>
      {tunings.map((item) => {
        return (
          <Button
            type={active.name === item.name ? 'primary' : 'default'}
            key={item.name}
            onClick={() => {
              onChange(item);
            }}
          >
            {item.name.toUpperCase()}
          </Button>
        );
      })}
    </PickerWrapper>
  );
};

export const TuningPicker = memo(_TuningPicker);
