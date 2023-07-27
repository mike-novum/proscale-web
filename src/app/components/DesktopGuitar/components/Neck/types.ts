import type { ScaleItem, TuningItem, NoteKey } from 'lib/tune';

export interface NeckProps {
  noteKey: NoteKey;
  tuning: TuningItem;
  scale: ScaleItem;
}
