import styled from 'styled-components';

export const ControlButtonText = styled.div<{ active: boolean }>`
  position: relative;

  user-select: none;

  color: ${(props) => props.theme.colors.text};

  font-family: system-ui, sans-serif;
  font-size: 16px;

  transition: 0.2s ease;
  transform: scale(${(props) => (props.active ? 1 : 0.85)});

  @media (max-width: 368px) {
    font-size: 14px;
  }
`;
