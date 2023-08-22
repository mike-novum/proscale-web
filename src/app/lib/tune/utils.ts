import type { GuitarKey } from './guitars';
import { Tunings } from './tunings';
import type { TuningItem } from './types';

export const getTunings = (guitarKey: GuitarKey): TuningItem[] => {
  return Tunings[`Tunings${guitarKey}`];
};
