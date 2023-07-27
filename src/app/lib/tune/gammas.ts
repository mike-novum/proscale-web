import type { ScaleItem } from './types';

export const naturalMinor = [0, 2, 3, 5, 7, 8, 10];
export const naturalMajor = [0, 2, 4, 5, 7, 9, 11];

export const garmonicMinor = [0, 2, 3, 5, 7, 8, 11];
export const garmonicMajor = [0, 2, 4, 5, 7, 8, 11];

export const melodicMinor = [0, 2, 3, 5, 7, 9, 11];
export const melodicMajor = [0, 2, 4, 5, 7, 8, 10];

export const blues = [0, 3, 5, 6, 7, 10];

export const lydian = [0, 2, 4, 6, 7, 9, 11];
export const ionian = [0, 2, 4, 5, 7, 9, 11]; //= =nat maj
export const mixolidian = [0, 2, 4, 5, 7, 9, 10];
export const dorian = [0, 2, 3, 5, 7, 9, 10];
export const aeolian = [0, 2, 3, 5, 7, 8, 10]; //= =nat minor
export const phrygian = [0, 1, 3, 5, 7, 8, 10];
export const lokrian = [0, 1, 3, 5, 6, 8, 10];

export const pentatonicMinor = [0, 3, 5, 7, 10];
export const pentatonicMajor = [0, 2, 4, 7, 9];
export const chromatic = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

export const doubleGarmonic = [0, 1, 4, 5, 7, 8, 11];

export const arabic = [];
export const persid = [];
export const visanti = [];
export const east = [];
export const japanise = [];
export const indian = [];
export const gypsy = [];
export const ruman = [];
export const jewish = [];

export const Scales: ScaleItem[] = [
  {
    name: 'Natural Min',
    intervals: naturalMinor,
  },
  {
    name: 'Natural Maj',
    intervals: naturalMajor,
  },
  {
    name: 'Chromatic',
    intervals: chromatic,
  },
  {
    name: 'Harmonic Min',
    intervals: garmonicMinor,
  },
  {
    name: 'Harmonic Maj',
    intervals: garmonicMajor,
  },
  {
    name: 'Melodic Min',
    intervals: melodicMinor,
  },
  {
    name: 'Melodic Maj',
    intervals: melodicMajor,
  },
  {
    name: 'Pentatonic Min',
    intervals: pentatonicMinor,
  },
  {
    name: 'Pentatonic Maj',
    intervals: pentatonicMajor,
  },
  {
    name: 'Lydian',
    intervals: lydian,
  },
  {
    name: 'Ionian',
    intervals: ionian,
  },
  {
    name: 'Mixolidian',
    intervals: mixolidian,
  },
  {
    name: 'Dorian',
    intervals: dorian,
  },
  {
    name: 'Aeolian',
    intervals: aeolian,
  },
  {
    name: 'Phrygian',
    intervals: phrygian,
  },
  {
    name: 'Lokrian',
    intervals: lokrian,
  },
];
