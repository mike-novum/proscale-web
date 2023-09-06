import type { CSSProperties, FC, MouseEventHandler } from 'react';
import styled from 'styled-components';
import type { IconType } from 'react-icons';

interface SubButtonProps {
  Icon: IconType;
  iconSize: number;
  onClick: MouseEventHandler<HTMLDivElement>;
  style?: CSSProperties;
}

const SubButtonWrapper = styled.div`
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

export const SubButton: FC<SubButtonProps> = ({
  onClick,
  iconSize,
  Icon,
  style,
}) => {
  return (
    <SubButtonWrapper onClick={onClick} style={style}>
      <Icon size={iconSize} color="#ffffff" style={{ marginLeft: 2 }} />
    </SubButtonWrapper>
  );
};
