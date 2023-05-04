import { NOTES } from './notes';
import type {
  FretNotes,
  GammaIntervals,
  GammaNotes,
  NeckNotes,
  NoteKey,
  TuningNotes,
} from './types';

const COUNT_OF_FRETS = 26;

/**
 * Функция для генерации нот на гитарном грифе
 * @param tuning - строй гитары
 * @returns  - массив нот всего грифа
 */
export const generateNeck = (tuning: TuningNotes): NeckNotes => {
  const mass: NeckNotes = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < COUNT_OF_FRETS; i++) {
    const fret: FretNotes = [];
    tuning.forEach((item) => {
      fret.push(`${NOTES[(+item + i) % 12]}`);
    });
    mass.push(fret);
  }

  return mass;
};

/**
 *  Функция для генерации гаммы (в нотах)
 * @param key - тоника
 * @param intervals  - интервалы гаммы
 * @returns
 */
export const generateGamma = (
  key: NoteKey,
  intervals: GammaIntervals
): GammaNotes => {
  const array: GammaNotes = [];

  const indexOfKey = NOTES.findIndex((item) => item === key);

  let newIntervals: GammaIntervals = Object.assign([], intervals);

  newIntervals = newIntervals.map((item) => {
    return (item + indexOfKey) % 12;
  });

  newIntervals.forEach((item) => {
    array.push(NOTES[item]);
  });

  return array;
};

/**
 * Функция для генерации нот клавиатуры пианино
 */
export const generatePianoKeyboard = (): NoteKey[] => {
  return [...NOTES, ...NOTES, ...NOTES, ...NOTES, ...NOTES, ...NOTES, ...NOTES];
};

// TODO: перенести в другое место
export const PianoKeyboardNotes = generatePianoKeyboard();
