import type { TuningItem } from './types';

// 6string Tunings
export const standart_6: string[] = ['E3', 'A3', 'D4', 'G4', 'B4', 'E5'];
export const dropD_6: string[] = ['D3', 'A3', 'D4', 'G4', 'B4', 'E5'];
export const dropC_6: string[] = ['C3', 'G3', 'C4', 'F4', 'A4', 'D5'];
export const dropB_6: string[] = ['B2', 'F#3', 'B3', 'E4', 'G#4', 'C#5'];
export const openC_6: string[] = ['C3', 'G#3', 'C4', 'G#4', 'C5', 'E5'];
export const doubleDropD_6: string[] = ['D3', 'A3', 'D4', 'G4', 'B4', 'D5'];
export const DADGAD_6: string[] = ['D3', 'A3', 'D4', 'G4', 'A4', 'D5'];
export const DADDAD_6: string[] = ['D3', 'A3', 'D4', 'D4', 'A4', 'D5'];
export const openD_6: string[] = ['D3', 'A3', 'D4', 'F#4', 'A4', 'D5'];
export const openG_6: string[] = ['D3', 'F3', 'D4', 'F4', 'B4', 'D5'];

// 7string Tunings

export const standart_7: string[] = ['B2', 'E3', 'A3', 'D4', 'G4', 'B4', 'E5'];
export const dropA_7: string[] = ['A2', 'E3', 'A3', 'D4', 'G4', 'B4', 'E5'];
export const dropAb_7: string[] = [
  'G#2',
  'D#3',
  'G#3',
  'C#4',
  'F#4',
  'A#4',
  'D#5',
];
export const dropG_7: string[] = ['G2', 'D3', 'G3', 'C4', 'F4', 'A4', 'D5'];
export const dropGb_7: string[] = [
  'F#2',
  'C#3',
  'F#3',
  'B3',
  'E4',
  'G#4',
  'C#5',
];

// 8string Tunings
export const standart_8: string[] = [
  'F#2',
  'B2',
  'E3',
  'A3',
  'D4',
  'G4',
  'B4',
  'E5',
];

export const dropE_8: string[] = [
  'E2',
  'B2',
  'E3',
  'A3',
  'D4',
  'G4',
  'B4',
  'E5',
];

export const F_8: string[] = [
  'F2',
  'A#2',
  'D#3',
  'G#3',
  'C#4',
  'F#4',
  'A#4',
  'D#5',
];
export const E_8: string[] = ['E2', 'A2', 'D3', 'G3', 'C4', 'F4', 'A4', 'D5'];

export const bassStandart: string[] = ['E1', 'A1', 'D2', 'G2'];
export const bassDropD: string[] = ['D1', 'A1', 'D2', 'G2'];
export const bassDropC: string[] = ['C1', 'G1', 'C2', 'F2'];

// g c e a

export const ukuleleStandart: string[] = ['G4', 'C4', 'E4', 'A4'];

export const Tunings6: TuningItem[] = [
  {
    name: 'Standart',
    notes: standart_6,
  },
  {
    name: 'Drop D',
    notes: dropD_6,
  },
  {
    name: 'Drop C',
    notes: dropC_6,
  },
  {
    name: 'Drop B',
    notes: dropB_6,
  },
  {
    name: 'Open C',
    notes: openC_6,
  },
  {
    name: 'DDD',
    notes: doubleDropD_6,
  },
  {
    name: 'DADGAD',
    notes: DADGAD_6,
  },
  {
    name: 'DADDAD',
    notes: DADDAD_6,
  },
  {
    name: 'Open D',
    notes: openD_6,
  },
  {
    name: 'Open G',
    notes: openG_6,
  },
];

export const Tunings7: TuningItem[] = [
  {
    name: 'Standart',
    notes: standart_7,
  },
  {
    name: 'Drop A',
    notes: dropA_7,
  },
  {
    name: 'Drop G#',
    notes: dropAb_7,
  },
  {
    name: 'Drop G',
    notes: dropG_7,
  },
  {
    name: 'Drop F#',
    notes: dropGb_7,
  },
];

export const Tunings8: TuningItem[] = [
  {
    name: 'Standart',
    notes: standart_8,
  },
  {
    name: 'Drop E',
    notes: dropE_8,
  },
  {
    name: 'F',
    notes: F_8,
  },
  {
    name: 'E',
    notes: E_8,
  },
];

export const TuningsBass: TuningItem[] = [
  {
    name: 'Standart',
    notes: bassStandart,
  },
  {
    name: 'Drop D',
    notes: bassDropD,
  },
  {
    name: 'Drop C',
    notes: bassDropC,
  },
];

export const TuningsUkulele: TuningItem[] = [
  {
    name: 'Standart',
    notes: ukuleleStandart,
  },
];

export const Tunings = {
  Tunings6,
  Tunings7,
  Tunings8,
  TuningsBass,
  TuningsUkulele,
};
