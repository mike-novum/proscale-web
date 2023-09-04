import * as Tone from 'tone';

const synth = new Tone.PolySynth(Tone.Synth).toDestination();

synth.volume.value = -8;

export function playNote(note: string) {
  synth.triggerAttackRelease(note, '8n');
}

export function playNotes(notes: string[]): void {
  const now = Tone.now();

  notes.forEach((note, index) => {
    synth.triggerAttackRelease(note, '8n', now + 0.2 * index);
  });
}

export function playChord(notes: string[]): void {
  const now = Tone.now();

  const plaingNotes = notes.map((note) => `${note}4`);

  synth.triggerAttack(plaingNotes, now);
  synth.triggerRelease(plaingNotes, now + 0.2);
}
