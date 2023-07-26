import type { ScaleItem, TuningItem, NoteKey } from 'utils/tunes';

export interface NeckProps {
  noteKey: NoteKey;
  tuning: TuningItem;
  scale: ScaleItem;
}
