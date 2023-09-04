import type { ChordDictionary } from 'tonal';

export type ChordType = ReturnType<typeof ChordDictionary.all>[number];
