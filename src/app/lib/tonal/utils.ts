import { Chord } from 'tonal';

import type { ChordType } from './types';

export const isChordsEqual = (
  firstChord: ChordType,
  secondChord: ChordType
): boolean => firstChord.aliases[0] === secondChord.aliases[0];
export const getChordDescription = (key: string, chord: ChordType): string => {
  const label = `${key} ${chord.aliases[0]}`;

  const aliases =
    chord.aliases.length > 0 ? `\nAliases: ${chord.aliases.join(', ')}` : '';

  const name = chord.name ? ` \nName: ${chord.name}` : '';

  return label + aliases + name;
};

export const getChordName = (key: string, chord: ChordType): string =>
  `${key}${chord.aliases[0]}`;

export const getChordNotes = (key: string, chord: ChordType): string[] =>
  Chord.getChord(chord.aliases[0], key).notes;
