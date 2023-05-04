import type { FC } from 'react';

import { Scales } from '../../utils/tunes';
import { ControlButton } from '../../ui';

interface ScalePickerProps {
  active: string;
  onChange: (key: string) => void;
}

export const ScalePicker: FC<ScalePickerProps> = ({ onChange, active }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 24 }}>
      {Scales.map((item) => {
        return (
          <ControlButton
            active={active === item.name}
            key={item.name}
            onClick={() => {
              onChange(item.name);
            }}
          >
            {item.name}
          </ControlButton>
        );
      })}
    </div>
  );
};
