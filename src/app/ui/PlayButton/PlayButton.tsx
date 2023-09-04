import type { CSSProperties, FC, MouseEventHandler } from 'react';
import styled from 'styled-components';
import { FaPlay } from 'react-icons/fa';

interface PlayButtonProps {
  onClick: MouseEventHandler<HTMLDivElement>;
  style?: CSSProperties;
}

const PlayButtonWrapper = styled.div`
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

export const PlayButton: FC<PlayButtonProps> = ({ onClick, style }) => {
  return (
    <PlayButtonWrapper onClick={onClick} style={style}>
      <FaPlay size={14} color="#ffffff" style={{ marginLeft: 2 }} />
    </PlayButtonWrapper>
  );
};
