import { isNoteEqual, isNoteInScale } from './neck';

describe('isNoteInScale Function', () => {
  const testScales = [
    ['Db', 'E', 'G'],
    ['C#', 'E', 'G'],
    ['C', 'E', 'G'],
    ['D', 'E', 'G'],
    ['D#', 'E', 'G'],
    ['Db', 'E', 'G'],
  ];

  test(`C# in Scale ${testScales[0].join(',')}`, () => {
    expect(isNoteInScale('C#', testScales[0])).toBe(true);
  });
  test(`Db in Scale ${testScales[1].join(',')}`, () => {
    expect(isNoteInScale('Db', testScales[1])).toBe(true);
  });
  test(`C# in Scale ${testScales[2].join(',')}`, () => {
    expect(isNoteInScale('C#', testScales[2])).toBe(false);
  });
  test(`Db in Scale ${testScales[3].join(',')}`, () => {
    expect(isNoteInScale('Db', testScales[3])).toBe(false);
  });
  test(`D# in Scale ${testScales[4].join(',')}`, () => {
    expect(isNoteInScale('D#', testScales[4])).toBe(true);
  });
  test(`Db in Scale ${testScales[5].join(',')}`, () => {
    expect(isNoteInScale('Db', testScales[5])).toBe(true);
  });
});

describe('isNoteEqual Function', () => {
  test(`C equal C`, () => {
    expect(isNoteEqual('C', 'C')).toBe(true);
  });
  test(`C# equal C`, () => {
    expect(isNoteEqual('C#', 'C')).toBe(false);
  });
  test(`C# equal Db`, () => {
    expect(isNoteEqual('C#', 'Db')).toBe(true);
  });
  test(`Db equal C#`, () => {
    expect(isNoteEqual('Db', 'C#')).toBe(true);
  });
  test(`D# equal Eb`, () => {
    expect(isNoteEqual('D#', 'Eb')).toBe(true);
  });
  test(`F# equal Gb`, () => {
    expect(isNoteEqual('F#', 'Gb')).toBe(true);
  });
  test(`G# equal Ab`, () => {
    expect(isNoteEqual('G#', 'Ab')).toBe(true);
  });
  test(`A# equal Bb`, () => {
    expect(isNoteEqual('A#', 'Bb')).toBe(true);
  });
});
