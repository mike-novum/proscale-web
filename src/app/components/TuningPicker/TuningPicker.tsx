import type { FC } from 'react';

import { Scales } from '../../utils/tunes';

interface TuningPickerProps {
  active?: string;
  onChange?: () => void;
}

export const TuningPicker: FC<TuningPickerProps> = () => {
  return (
    <div>
      {Scales.map((item) => {
        return <div key={item.name}>{item.name}</div>;
      })}
    </div>
  );
};
