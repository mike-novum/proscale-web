import { GuitarKey, TuningItem, Tunings } from '../../../utils/tunes';

export const getTunings = (guitarKey: GuitarKey): TuningItem[] => {
  return Tunings[`Tunings${guitarKey}`];
};
