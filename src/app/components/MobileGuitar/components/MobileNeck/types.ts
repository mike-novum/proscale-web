import type { NoteKey, ScaleItem, TuningItem } from 'lib/tune';

export interface NeckProps {
  noteKey: NoteKey;
  tuning: TuningItem;
  scale: ScaleItem;
}
