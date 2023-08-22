import styled from 'styled-components';

export const ControlTabsWrapper = styled.div`
  width: 100%;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  gap: 4px;

  height: 56px;
  @media (max-width: 368px) {
    height: 32px;
  }
`;
