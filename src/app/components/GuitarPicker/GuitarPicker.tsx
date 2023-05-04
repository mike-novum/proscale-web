import type { FC } from 'react';

import { Scales } from '../../utils/tunes';

interface GuitarPickerProps {
  active?: string;
  onChange?: () => void;
}

export const GuitarPicker: FC<GuitarPickerProps> = () => {
  return (
    <div>
      {Scales.map((item) => {
        return <div key={item.name}>{item.name}</div>;
      })}
    </div>
  );
};
