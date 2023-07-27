import * as Tone from 'tone';

// TODO: add beautiful tembre

const synth = new Tone.Synth().toDestination();

synth.envelope.set({
  attack: 0,
  decay: 0.5,
  sustain: 0,
  release: 20,
});

export function playNote(note: string) {
  synth.triggerAttackRelease(note, '8n');
}

export function playNotes(notes: string[]): void {
  const now = Tone.now();

  notes.forEach((note, index) => {
    synth.triggerAttackRelease(note, '8n', now + 0.2 * index);
  });
}
