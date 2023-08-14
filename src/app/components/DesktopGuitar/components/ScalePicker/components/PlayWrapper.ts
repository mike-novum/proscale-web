import styled from 'styled-components';

export const PlayWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 32px;
  border-radius: 16px;
  position: relative;

  transition: 200ms;
  background-color: unset;

  &:hover {
    background-color: rgba(255, 255, 255, 0.07);
  }
  &:active {
    transform: scale(0.9);
  }
`;
