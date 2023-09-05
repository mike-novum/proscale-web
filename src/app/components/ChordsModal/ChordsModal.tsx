import { forwardRef, useMemo, useState } from 'react';
import styled from 'styled-components';
import { Card } from 'ui/Card';
import { Modal, ModalRef } from 'ui/Modal';
import { SearchBar } from 'ui/SearchBar';
import { ChordDictionary } from 'tonal';
import { MultiButton } from 'ui';
import { FaPlay } from 'react-icons/fa';
import {
  getChordDescription,
  type ChordType,
  getChordName,
  isChordsEqual,
  getChordNotes,
} from 'lib/tonal';
import { playChord } from 'lib/tone';

interface ChordsModalProps {
  activeKey: string;
  activeChord: ChordType;
  onChangeChord: (chord: ChordType) => void;
}

const ChordWrapper = styled.div`
  border-radius: 1;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  overflow: scroll;
  padding: 16px 28px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Container = styled(Card)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 768px;
  padding-top: 16px;
  height: 75vh;
`;

const EmptyList = styled.div`
  padding: 32px;
  width: 100%;
  height: fit-content;
  text-align: center;
  font-size: 22px;
  font-weight: 600;
  color: #32354f;
`;

const Header = styled.h1`
  padding: 0px 32px;
`;

export const ChordsModal = forwardRef<ModalRef, ChordsModalProps>(
  ({ onChangeChord, activeChord, activeKey }, ref) => {
    const chords = useMemo(() => ChordDictionary.all(), []);

    const [search, onChangeSearch] = useState<string>('');

    const filteredChords = chords.filter(
      (chord) => chord.aliases.length > 0 && chord.aliases[0].includes(search)
    );

    return (
      <Modal overlay ref={ref}>
        <Container>
          <Header>Chords</Header>
          <SearchBar
            value={search}
            onChange={onChangeSearch}
            placeholder="Enter chord name..."
            style={{ margin: '0px 32px' }}
          />
          {filteredChords.length === 0 ? (
            <EmptyList>Not found</EmptyList>
          ) : (
            <ChordWrapper>
              {filteredChords.map((chord) => {
                const name = getChordName(activeKey, chord);
                return (
                  <MultiButton
                    active={isChordsEqual(chord, activeChord)}
                    Icon={FaPlay}
                    label={name}
                    description={getChordDescription(activeKey, chord)}
                    onClick={() => onChangeChord(chord)}
                    onClickSub={() => {
                      playChord(getChordNotes(activeKey, chord));
                    }}
                    key={name}
                  />
                );
              })}
            </ChordWrapper>
          )}
        </Container>
      </Modal>
    );
  }
);
