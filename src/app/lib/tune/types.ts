export enum Notes {
  C = 0,
  Db = 1,
  D = 2,
  Eb = 3,
  E = 4,
  F = 5,
  Gb = 6,
  G = 7,
  Ab = 8,
  A = 9,
  Bb = 10,
  B = 11,
}

/**
 * Нота
 */
export type NoteKey =
  | 'C'
  | 'C#'
  | 'D'
  | 'D#'
  | 'E'
  | 'F'
  | 'F#'
  | 'G'
  | 'G#'
  | 'A'
  | 'A#'
  | 'B';

/**
 * Массив нот на грифе
 */
export type NeckNotes = Array<Array<NoteKey>>;

/**
 * Строй инструмента (набор нот с самой нижней струны по тону)
 */
export type TuningNotes = Array<number>;

/**
 * Ноты на ладу
 */
export type FretNotes = Array<NoteKey>;

/**
 * Гамма (интервал в цифрах от ключа)
 */
export type GammaIntervals = Array<number>;

/**
 * Гамма (интервал в нотах)
 */
export type GammaNotes = Array<NoteKey>;

/**
 * Гамма (элемент)
 */
export type ScaleItem = {
  name: string;
  intervals: GammaIntervals;
};

/**
 * Гитарный строй (элемент)
 */
export type TuningItem = {
  name: string;
  notes: string[];
};
