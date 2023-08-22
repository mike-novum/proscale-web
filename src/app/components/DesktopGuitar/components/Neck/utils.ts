import { Note } from 'tonal';

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

export const isNoteInScale = (note: string, scaleNotes: string[]): boolean => {
  const founded = scaleNotes.find((scaleNote) => {
    return Note.chroma(note) === Note.chroma(scaleNote);
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
