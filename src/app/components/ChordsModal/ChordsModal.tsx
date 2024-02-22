import { forwardRef, useMemo, useState } from 'react';
import { Modal, ModalRef } from 'ui/Modal';
import { SearchBar } from 'ui/SearchBar';
import { ChordDictionary } from 'tonal';
import { ListPlaceholder, MultiButton } from 'ui';
import { FaPlay } from 'react-icons/fa';
import {
  getChordDescription,
  type ChordType,
  getChordName,
  isChordsEqual,
  getChordNotes,
} from 'lib/tonal';
import { playChord } from 'lib/tone';
import { isIOS } from 'lib/platform';

interface ChordsModalProps {
  activeKey: string;
  activeChord: ChordType;
  onChangeChord: (chord: ChordType) => void;
}

export const ChordsModal = forwardRef<ModalRef, ChordsModalProps>(
  ({ onChangeChord, activeChord, activeKey }, ref) => {
    const chords = useMemo(() => ChordDictionary.all(), []);

    const [search, onChangeSearch] = useState<string>('');

    const filteredChords = chords.filter((chord) => {
      return (
        chord.aliases.length > 0 &&
        (activeKey + chord.aliases[0])
          .toLowerCase()
          .includes(search.toLocaleLowerCase())
      );
    });

    return (
      <Modal overlay ref={ref}>
        <Modal.Container>
          <Modal.Header>Chords</Modal.Header>
          <SearchBar
            value={search}
            onChange={onChangeSearch}
            placeholder="Enter chord name..."
            style={{ margin: '0px 16px' }}
          />
          {filteredChords.length === 0 ? (
            <ListPlaceholder>Not found</ListPlaceholder>
          ) : (
            <Modal.WrapContainer>
              {filteredChords.map((chord) => {
                const name = getChordName(activeKey, chord);
                return (
                  <MultiButton
                    active={isChordsEqual(chord, activeChord)}
                    Icon={FaPlay}
                    label={name}
                    description={getChordDescription(activeKey, chord)}
                    onClick={() => onChangeChord(chord)}
                    onClickSub={
                      isIOS
                        ? undefined
                        : () => {
                            playChord(getChordNotes(activeKey, chord));
                          }
                    }
                    key={name}
                  />
                );
              })}
            </Modal.WrapContainer>
          )}
        </Modal.Container>
      </Modal>
    );
  }
);
