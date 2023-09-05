import { forwardRef, useMemo, useState } from 'react';
import { Scale } from 'tonal';
import { Modal, ModalRef, SearchBar, MultiButton, ListPlaceholder } from 'ui';
import { FaPlay } from 'react-icons/fa';
import { playNotes } from 'lib/tone';

interface ScalesModalProps {
  activeScale?: string;
  onChangeScale?: (scaleName: string) => void;
}

export const ScalesModal = forwardRef<ModalRef, ScalesModalProps>(
  ({ onChangeScale, activeScale }, ref) => {
    const scales = useMemo(() => Scale.names(), []);

    const [search, onChangeSearch] = useState<string>('');

    const filteredScales = scales.filter((scale) => scale.includes(search));

    return (
      <Modal overlay ref={ref}>
        <Modal.Container>
          <Modal.Header>Scales</Modal.Header>
          <SearchBar
            value={search}
            onChange={onChangeSearch}
            placeholder="Enter scale name..."
            style={{ margin: '0px 16px' }}
          />
          {filteredScales.length === 0 ? (
            <ListPlaceholder>Not found</ListPlaceholder>
          ) : (
            <Modal.WrapContainer>
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
            </Modal.WrapContainer>
          )}
        </Modal.Container>
      </Modal>
    );
  }
);
