import { Note, Range } from 'tonal';

export const calculateFretWidth = (fretIndex: number, fretSize: number) =>
  Math.trunc(-Math.sqrt(40 * fretIndex) + fretSize);

export const getNeckHeight = (stringCount: number): number => {
  if (stringCount === 4) {
    return 250;
  }
  if (stringCount === 7) {
    return 310;
  }
  if (stringCount === 8) {
    return 320;
  }

  return 300;
};

export const generateNeck = (tuningNotes: string[]): string[][] => {
  const fretsCount = 25;

  const rez = tuningNotes.map((note) => {
    const noteSymbol = Note.pitchClass(note);
    const startOctave = Note.octave(note) || 1;

    return Range.chromatic([note, noteSymbol + (startOctave + 2)], {
      sharps: false,
    });
  });

  const mass: string[][] = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < fretsCount; i++) {
    const fret: string[] = [];

    rez.forEach((item) => {
      fret.push(item[i]);
    });
    mass.push(fret);
  }

  return mass;
};

export const isNoteEqual = (note1: string, note2: string): boolean => {
  return Note.chroma(note1) === Note.chroma(note2);
};

export const isNoteInScale = (note: string, scaleNotes: string[]): boolean => {
  const founded = scaleNotes.find((scaleNote) => {
    return isNoteEqual(note, scaleNote);
  });

  return founded !== undefined;
};

export const getFretWidth = (screenWidth: number | undefined): number => {
  if (screenWidth) {
    if (screenWidth < 768) {
      return 45;
    }

    if (screenWidth < 1024) {
      return 50;
    }
    if (screenWidth < 1366) {
      return 55;
    }
    if (screenWidth < 1440) {
      return 60;
    }
    if (screenWidth < 1600) {
      return 65;
    }
    if (screenWidth < 1920) {
      return 70;
    }
  }
  return 80;
};

export const isBigFret = (number: number): boolean =>
  number === 3 ||
  number === 5 ||
  number === 7 ||
  number === 9 ||
  number === 12 ||
  number === 15 ||
  number === 17 ||
  number === 19 ||
  number === 21;
