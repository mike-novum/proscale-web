import styled from 'styled-components';

export const Scroll = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  overflow-y: auto;

  ::-webkit-scrollbar {
    color: #95ff00;
    width: 4px;
    border-radius: 2px;
  }
  ::-webkit-scrollbar-track {
    background-color: #ff9500;
  }
  ::-webkit-scrollbar-track-piece {
    background-color: ${(props) => props.theme.colors.card};
  }
  ::-webkit-scrollbar-thumb {
    width: 2px;
    border-radius: 2px;
    background-color: ${(props) => props.theme.colors.notification};
  }
`;
