import type {
  NoteKey,
  ScaleItem,
  TuningItem,
} from '../../../../../../utils/tunes';

export interface NeckProps {
  noteKey: NoteKey;
  tuning: TuningItem;
  scale: ScaleItem;
}
