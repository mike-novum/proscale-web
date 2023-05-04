import type { GammaIntervals, NoteKey, TuningNotes } from '../../utils/tunes';

export interface NeckProps {
  key: NoteKey;
  tuning: TuningNotes;
  scale: GammaIntervals;
}
