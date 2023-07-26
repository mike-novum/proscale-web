import styled from 'styled-components';

export const ControlTabButton = styled.button<{ active?: boolean }>`
  position: relative;
  border: none;
  outline: none;
  background: none;
  user-select: none;
  padding: 0px 8px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.text};

  transition: 0.2s ease;
  opacity: ${(props) => (props.active ? 1 : 0.4)};
  height: ${(props) => (props.active ? 32 : 28)}px;

  font-family: system-ui, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;

  :active {
    opacity: 0.6;
  }
  width: ${(props) => (props.active ? 70 : 60)}px;

  height: 56px;
  @media (max-width: 368px) {
    height: 32px;
  }
`;
