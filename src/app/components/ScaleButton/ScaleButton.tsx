import { playNotes } from 'lib/tone';
import type { FC } from 'react';
import styled from 'styled-components';
import { Scale } from 'tonal';
import { FaPlay } from 'react-icons/fa';
import { Wrappers } from 'ui/Button/Wrappers';

interface ScaleButtonProps {
  active?: boolean;
  scale: string;
  onClick: () => void;
}

const PlayButton = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  background-color: #1f2030;
  transition: 200ms;

  &:active {
    opacity: 0.7;
  }
  &:hover {
    background-color: #1f2030;
  }
`;

export const ScaleButton: FC<ScaleButtonProps> = ({
  scale,
  active,
  onClick,
}) => {
  const Container = active ? Wrappers.primaryWrapper : Wrappers.defaultWrapper;

  return (
    <Container
      size="default"
      onClick={onClick}
      style={{
        paddingLeft: 22,
        paddingRight: 2,
        textTransform: 'capitalize',
      }}
    >
      <span>{scale}</span>
      <PlayButton
        onClick={(e) => {
          e.stopPropagation();
          const scaleNotes = Scale.get(`C4 ${scale}`).notes;
          playNotes(scaleNotes);
        }}
      >
        <FaPlay size={14} color="#ffffff" style={{ marginLeft: 2 }} />
      </PlayButton>
    </Container>
  );
};
