import { forwardRef, useMemo, useState } from 'react';
import styled from 'styled-components';
import { Scale } from 'tonal';
import { Card } from 'ui/Card';
import { Modal, ModalRef, SearchBar, MultiButton } from 'ui';
import { FaPlay } from 'react-icons/fa';
import { playNotes } from 'lib/tone';

interface ScalesModalProps {
  activeScale?: string;
  onChangeScale?: (scaleName: string) => void;
}

const ScaleWrapper = styled.div`
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
  font-family: 'Montserrat';
`;

export const ScalesModal = forwardRef<ModalRef, ScalesModalProps>(
  ({ onChangeScale, activeScale }, ref) => {
    const scales = useMemo(() => Scale.names(), []);

    const [search, onChangeSearch] = useState<string>('');

    const filteredScales = scales.filter((scale) => scale.includes(search));

    return (
      <Modal overlay ref={ref}>
        <Container>
          <Header>Scales</Header>
          <SearchBar
            value={search}
            onChange={onChangeSearch}
            placeholder="Enter scale name..."
            style={{ margin: '0px 16px' }}
          />
          {filteredScales.length === 0 ? (
            <EmptyList>Not found</EmptyList>
          ) : (
            <ScaleWrapper>
              {filteredScales.map((scale) => {
                return (
                  <MultiButton
                    active={activeScale === scale}
                    Icon={FaPlay}
                    label={scale}
                    onClick={() => {
                      if (onChangeScale) {
                        onChangeScale(scale);
                      }
                    }}
                    onClickSub={() => {
                      const scaleNotes = Scale.get(`C4 ${scale}`).notes;
                      playNotes(scaleNotes);
                    }}
                    key={scale}
                  />
                );
              })}
            </ScaleWrapper>
          )}
        </Container>
      </Modal>
    );
  }
);
